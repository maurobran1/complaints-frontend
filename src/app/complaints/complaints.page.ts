import { Component, OnInit } from '@angular/core';
import { Complaint } from '../models/complaint.model'
import { ComplaintsService } from '../services/complaints.service';


@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.page.html',
  styleUrls: ['./complaints.page.scss'],
})
export class ComplaintsPage implements OnInit {
  searchText: '';
  complaints: Complaint[];

  constructor(private complaintsService: ComplaintsService) { }

  ngOnInit() {
    this.complaintsService.complaints.subscribe(complaints => {
      console.log(complaints);
      this.complaints = complaints;
    });
    this.complaintsService.getComplaints();
  }

  searchComplaint(event) {
    this.searchText = event.target.value
  }

}
