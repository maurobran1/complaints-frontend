import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComplaintType } from '../complaints/complaint-type.model';

@Injectable({
  providedIn: 'root'
})
export class ComplainttypeService {

  API_URL = 'http://localhost:5000/api/complaintstype/';

  constructor(private httpClient: HttpClient) { }

  getComplaints() {
    return this.httpClient.get<ComplaintType[]>(this.API_URL);
  }
}
