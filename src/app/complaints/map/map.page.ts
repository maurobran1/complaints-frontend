import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { ActivatedRoute, Router } from '@angular/router';
import { Complaint, Coordinates } from '../../models/complaint.model';
import { ComplaintsService } from '../../services/complaints.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;
  complaints: Complaint[];
  selectedComplaint: Complaint = {};

  constructor(private complaintsService: ComplaintsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.complaintsService.complaints.subscribe(complaints => {
      this.complaints = complaints;
       this.selectedComplaint = complaints[0]; //messy
    });
    this.complaintsService.getComplaints();
  }

  center: google.maps.LatLngLiteral = {
    lat: -33.745481,
    lng: -61.963603
  }

  options: google.maps.MapOptions = {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoomControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    zoom: 14
    // maxZoom: 14,
    // minZoom: 20,
  }

  openInfoWindow(marker: MapMarker, complaint: Complaint) {
    this.selectedComplaint = complaint;
    this.infoWindow.open(marker);
  }

  onMapClick(event: any) {
    const coords: Coordinates = { lat: event.latLng.lat(), lng: event.latLng.lng() }
  }

  openComplaintDetails(marker) {
    const complaintID = marker._title._value
    this.router.navigate(["../../", complaintID], { relativeTo: this.route });
  }

}
