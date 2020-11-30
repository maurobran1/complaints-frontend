import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComplaintsPage } from './complaints.page';

const routes: Routes = [
  {
    path: '',
    component: ComplaintsPage
  },
  {
    path: 'new-complaint',
    loadChildren: () => import('./new-complaint/new-complaint.module').then(m => m.NewComplaintPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: ':complaintId',
    loadChildren: () => import('./complaint-detail/complaint-detail.module').then(m => m.ComplaintDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComplaintsPageRoutingModule { }
