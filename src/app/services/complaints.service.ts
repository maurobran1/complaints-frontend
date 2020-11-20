import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CameraPhoto } from '@capacitor/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { PhotoService } from './photo.service';
import { Complaint } from '../models/complaint.model'


@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {
  API_URL = 'http://localhost:5000/api/complaints/';
  complaints = new Subject<Complaint[]>();

  constructor(private httpClient: HttpClient, private photoService: PhotoService) { }

  getComplaints() {
    return this.httpClient.get<Complaint[]>(this.API_URL)
      .pipe(
        map((complaints: Complaint[]) => {
          complaints.forEach(complaint => {
            complaint.date = new Date(complaint.date);
            complaint.createdAt = new Date(complaint.createdAt);
            complaint.updatedAt = new Date(complaint.updatedAt);
          })
          return complaints;
        }
        )
      ).subscribe(complaints => {
        this.complaints.next(complaints);
      });
  }

  getComplaint(complaintId: string) {
    return this.httpClient.get<Complaint>(`${this.API_URL}${complaintId}`)
      .pipe(
        map((complaint: Complaint) => {
          complaint.date = new Date(complaint.date);
          complaint.createdAt = new Date(complaint.createdAt);
          complaint.updatedAt = new Date(complaint.updatedAt);
          return complaint;
        }
        )
      );
  }

  async addComplaint(complaint: Complaint, photos: CameraPhoto[]) {
    let formData = new FormData();
    for (let photo of photos) {
      const blobPhoto = await this.photoService.photoToBlob(photo);
      formData.append('photos', blobPhoto);
    }
    const complaintString = JSON.stringify(complaint)
    formData.append('data', complaintString);
    return this.httpClient.post<Complaint>(this.API_URL, formData);
  }

  updateComplaint(complaint: Complaint) {
    return this.httpClient.post<Complaint>(`${this.API_URL}${complaint._id}`, complaint);
  }

}
