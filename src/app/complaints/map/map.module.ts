import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapPageRoutingModule } from './map-routing.module';
import { GoogleMapsModule } from '@angular/google-maps'

import { MapPage } from './map.page';

@NgModule({
  imports: [
    CommonModule,
    GoogleMapsModule,
    FormsModule,
    IonicModule,
    MapPageRoutingModule
  ],
  declarations: [MapPage]
})
export class MapPageModule { }
