import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewComplaintPage } from './new-complaint.page';

const routes: Routes = [
  {
    path: '',
    component: NewComplaintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewComplaintPageRoutingModule {}
