import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MapMarker } from '@angular/google-maps';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.scss'],
})
export class MapModalComponent implements OnInit, OnDestroy {
  markedPosition: google.maps.LatLngLiteral;

  center: google.maps.LatLngLiteral = {
    lat: -33.745481,
    lng: -61.963603
  }

  zoom = 14

  options: google.maps.MapOptions = {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoomControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    scrollwheel: true,
    disableDoubleClickZoom: true
    // maxZoom: 14,
    // minZoom: 20,
  }

  constructor(private modalController: ModalController) { }


  ngOnInit() { }


  onMapClick(event: google.maps.MouseEvent) {
    this.markedPosition = event.latLng.toJSON();
    console.log(this.markedPosition)
  }

  markerOptions: google.maps.MarkerOptions = { draggable: true };

  onCancel() {
    this.modalController.dismiss();
  }

  onAccept() {
    this.modalController.dismiss(this.markedPosition);
  }

  onMapMarkDragEnd(event) {
    this.markedPosition = event.latLng.toJSON();
    console.log(this.markedPosition)
  }

  ngOnDestroy(){
      
  }

}
