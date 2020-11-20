import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';

import { MapModalComponent } from './map-modal.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [
        MapModalComponent,
    ],
    imports: [
        CommonModule,
        GoogleMapsModule,
        IonicModule
    ],
    exports: [
        MapModalComponent,
    ],
})
export class MapModalModule { }
