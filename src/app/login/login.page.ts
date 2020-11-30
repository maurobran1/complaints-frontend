import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginData = {
    user: "",
    password: ""
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController,
    private navController: NavController) { }

  ngOnInit() {
    if (this.authService.isLoggedIn) {
      this.navController.navigateRoot(['../complaints'])
    }
  }

  logIn(form) {
    const result = this.authService.logIn(form.value.username, form.value.password);
    if (result) {
      this.presentToast('Logeado correctamente')
      // this.router.navigate(['../complaints'])
      this.navController.navigateRoot(['../complaints'])
    } else {
      this.presentToast('Contraseña incorrecta')
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
