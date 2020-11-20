"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MapPage = void 0;
var core_1 = require("@angular/core");
var google_maps_1 = require("@angular/google-maps");
var MapPage = /** @class */ (function () {
    function MapPage(complaintsService, router, route) {
        this.complaintsService = complaintsService;
        this.router = router;
        this.route = route;
        this.selectedComplaint = {};
        this.center = {
            lat: -33.745481,
            lng: -61.963603
        };
        this.options = {
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControl: false,
            fullscreenControl: false,
            streetViewControl: false,
            scrollwheel: true,
            disableDoubleClickZoom: false,
            zoom: 14
            // maxZoom: 14,
            // minZoom: 20,
        };
    }
    MapPage.prototype.ngOnInit = function () {
        var _this = this;
        this.complaintsService.getComplaints().subscribe(function (complaints) {
            _this.complaints = complaints;
            _this.selectedComplaint = complaints[0]; //messy
        });
    };
    MapPage.prototype.openInfoWindow = function (marker, complaint) {
        console.log(marker);
        console.log(complaint);
        this.selectedComplaint = complaint;
        this.infoWindow.open(marker);
    };
    MapPage.prototype.onMapClick = function (event) {
        var coords = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    };
    MapPage.prototype.openComplaintDetails = function (marker) {
        var complaintID = marker._title._value;
        this.router.navigate(["../../", complaintID], { relativeTo: this.route });
    };
    __decorate([
        core_1.ViewChild(google_maps_1.MapInfoWindow)
    ], MapPage.prototype, "infoWindow");
    MapPage = __decorate([
        core_1.Component({
            selector: 'app-map',
            templateUrl: './map.page.html',
            styleUrls: ['./map.page.scss']
        })
    ], MapPage);
    return MapPage;
}());
exports.MapPage = MapPage;
