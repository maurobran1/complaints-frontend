import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComplaintState } from '../models/complaint-state.model';

@Injectable({
  providedIn: 'root'
})
export class ComplaintstateService {

  API_URL = 'http://localhost:5000/api/complaintsstate/';

  constructor(private httpClient: HttpClient) { }

  getComplaintStates() {
    return this.httpClient.get<ComplaintState[]>(this.API_URL);
  }
}
