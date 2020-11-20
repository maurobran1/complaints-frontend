import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActionSheetController, AlertController, IonInput, ModalController, ToastController } from '@ionic/angular';
import { first } from 'rxjs/operators';

import { ComplaintType } from '../complaint-type.model';
import { Complaint, Coordinates } from '../../models/complaint.model';
import { ComplaintsService } from '../../services/complaints.service';

import { CameraPhoto, Capacitor, Plugins } from '@capacitor/core';
import { GoogleMapsService } from 'src/app/services/google.service';
import { ComplainttypeService } from 'src/app/services/complainttype.service';
import { MapModalComponent } from 'src/app/map-modal/map-modal.component';
import { PhotoService } from 'src/app/services/photo.service';
import { ActivatedRoute, Router } from '@angular/router';

const { Geolocation } = Plugins;
const { Keyboard } = Plugins;

@Component({
  selector: 'app-new-complaint',
  templateUrl: './new-complaint.page.html',
  styleUrls: ['./new-complaint.page.scss'],
})
export class NewComplaintPage implements OnInit {
  @ViewChild('addressInput') addressInput: IonInput;
  @ViewChild('coordinatesInput') coordinatesInput: IonInput;

  selectedLocation: Coordinates;
  complaintTypes: ComplaintType[];
  capturedPhotos: CameraPhoto[] = [];
  nowLocaleISOString = (new Date(Date.now() - ((new Date()).getTimezoneOffset() * 60000))).toISOString().slice(0, -1)

  constructor(private googleMapsService: GoogleMapsService,
    private complaintTypeService: ComplainttypeService,
    private complaintsService: ComplaintsService,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private toastController: ToastController,
    private modalController: ModalController,
    private photoService: PhotoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.complaintTypeService.getComplaints().pipe(first())
      .subscribe(complaintTypes => {
        this.complaintTypes = complaintTypes;
      })
  }

  async onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const newComplaint: Complaint = {
      typeID: form.value.typeID,
      plate: form.value.plate,
      location: {
        coordinates: this.selectedLocation,
        address: form.value.address,
      },
      date: form.value.date,
      notes: form.value.notes,
    }

    ;(await this.complaintsService.addComplaint(newComplaint, this.capturedPhotos)).pipe(first()).subscribe(
      complaint => {
        if (complaint) {
          this.presentToast('Denuncia realizada correctamente', 3000);
          console.log(complaint);
          form.reset();
          this.complaintsService.getComplaints();
          this.capturedPhotos = [];
          this.selectedLocation = {};
          this.router.navigate(["../../", complaint._id], { relativeTo: this.activatedRoute });
        }
      }
    );
  }

  async presentToast(message: string, duration: number) {
    const alert = await this.toastController.create({
      message,
      duration
    });
    await alert.present();
  }

  async chooseDirectionMode() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Elija una opción',
      buttons: [
        {
          text: 'Seleccionar la ubicación en el mapa',
          icon: 'map-outline',
          handler: async () => {
            const modal = await this.modalController.create({ component: MapModalComponent });
            modal.onDidDismiss().then((modalData) => {
              if (!modalData.data) {
                return;
              }
              this.selectedLocation = modalData.data;
              this.coordinatesInput.value = `${modalData.data.lat}, ${modalData.data.lng}`
              this.googleMapsService.getAddress(this.selectedLocation.lat, this.selectedLocation.lng).subscribe(address => {
                this.addressInput.value = address;
              });
            });
            modal.present();
          }
        },
        {
          text: 'Ingresar la dirección por teclado',
          icon: 'chatbox-ellipses-outline',
          handler: async () => {
            this.addressInput.value = "";
            this.coordinatesInput.value = "";
            this.addressInput.disabled = false;
            this.addressInput.setFocus();
            Keyboard.show();
          }
        },
        {
          text: 'Utilizar la ubicación de mi dispositivo',
          icon: 'phone-portrait-outline',
          handler: () => {
            this.getCurrentPosition();
          }
        }]
    });
    await actionSheet.present();
  }


  async getCurrentPosition(): Promise<Coordinates> {
    if (!Capacitor.isPluginAvailable('Geolocation')) {
      this.showErrorAlert();
      return;
    }
    await Geolocation.getCurrentPosition().
      then(value => {
        this.selectedLocation = { lat: value.coords.latitude, lng: value.coords.longitude };
        this.coordinatesInput.value = `${value.coords.latitude}, ${value.coords.longitude}`

        this.googleMapsService.getAddress(this.selectedLocation.lat, this.selectedLocation.lng).subscribe(formattedAddress => {
          console.log(formattedAddress);
          this.addressInput.value = formattedAddress;
        });
      }).
      catch(reason => {
        this.showErrorAlert();
        console.log('Error en getCurrentPosition: ', reason);
      });
  }

  private async showErrorAlert() {
    const alert = await this.alertController.create({
      header: 'No se pudo determinar la ubicación del dispositivo',
      message: 'Por favor usa el mapa para elegir la ubicación'
    });
    alert.present()
  }

  async takePhoto() {
    this.capturedPhotos.push(await this.photoService.takePhoto())
  }
}