import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { GoogleMapsService } from 'src/app/services/google.service';
import { Complaint } from '../../models/complaint.model';
import { ComplaintsService } from '../../services/complaints.service';

@Component({
  selector: 'app-complaint-detail',
  templateUrl: './complaint-detail.page.html',
  styleUrls: ['./complaint-detail.page.scss'],
})
export class ComplaintDetailPage implements OnInit {
  loadedComplaint: Complaint;
  mapImage: string;

  constructor(private activatedRoute: ActivatedRoute, private complaintService: ComplaintsService, private googleService: GoogleMapsService) { }


  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('complaintId')) {
        console.log('paramMap no tiene complaintId')
        //redirect the user
        return;
      }
      const complaintId = paramMap.get('complaintId');
      this.complaintService.getComplaint(complaintId).pipe(first()).subscribe(complaint => {
        console.log(complaint)
        this.loadedComplaint = complaint;
        this.mapImage = this.googleService.getMapImage(this.loadedComplaint.location.coordinates.lat,
          this.loadedComplaint.location.coordinates.lng, 16);
      });
    })
  }

}
