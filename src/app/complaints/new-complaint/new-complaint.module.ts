import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewComplaintPageRoutingModule } from './new-complaint-routing.module';

import { NewComplaintPage } from './new-complaint.page';
import { MapModalModule } from 'src/app/map-modal/map-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewComplaintPageRoutingModule,
    MapModalModule
  ],
  declarations: [NewComplaintPage]
})
export class NewComplaintPageModule { }
