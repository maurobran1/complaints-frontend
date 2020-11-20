import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComplaintsPageRoutingModule } from './complaints-routing.module';

import { ComplaintsPage } from './complaints.page';
import { HttpClientModule } from '@angular/common/http';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ComplaintsPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [ComplaintsPage],
  providers: [HttpClientModule]
})
export class ComplaintsPageModule { }
