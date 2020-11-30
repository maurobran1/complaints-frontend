import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { ComplaintstateService } from 'src/app/services/complaintstate.service';
import { ComplainttypeService } from 'src/app/services/complainttype.service';
import { GoogleMapsService } from 'src/app/services/google.service';
import { Complaint } from '../../models/complaint.model';
import { ComplaintsService } from '../../services/complaints.service';
import { ComplaintType } from '../../models/complaint-type.model';
import { ComplaintState } from 'src/app/models/complaint-state.model';

@Component({
  selector: 'app-complaint-detail',
  templateUrl: './complaint-detail.page.html',
  styleUrls: ['./complaint-detail.page.scss'],
})
export class ComplaintDetailPage implements OnInit {
  loadedComplaint: Complaint;
  mapImage: string;
  complaintStates: ComplaintState[] = [];
  complaintTypes: ComplaintType[] = [];

  asd;

  constructor(
    private activatedRoute: ActivatedRoute,
    private complaintService: ComplaintsService,
    private googleService: GoogleMapsService,
    private complaintStateService: ComplaintstateService,
    private complaintTypeService: ComplainttypeService
  ) { }

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

      this.complaintStateService.getComplaintStates().subscribe(data => {
        console.log(data);
        this.complaintStates = data;
      });

      this.complaintTypeService.getComplaintTypes().subscribe(data => {
        console.log(data);
        this.complaintTypes = data;
      });
    })

  }

  typeChanged(event) {
    console.log(event)
  }

  stateChanged(event) {
    console.log(event)
  }

  updateComplaint() {
    // this.complaintService.updateComplaint(this.loadedComplaint).subscribe(data => {
    //   console.log(data);
    // });
  }

}
