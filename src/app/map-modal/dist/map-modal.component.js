"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MapModalComponent = void 0;
var core_1 = require("@angular/core");
var MapModalComponent = /** @class */ (function () {
    function MapModalComponent(modalController) {
        this.modalController = modalController;
        this.center = {
            lat: -33.745481,
            lng: -61.963603
        };
        this.zoom = 14;
        this.options = {
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControl: false,
            fullscreenControl: false,
            streetViewControl: false,
            scrollwheel: true,
            disableDoubleClickZoom: true
            // maxZoom: 14,
            // minZoom: 20,
        };
        this.markerOptions = { draggable: true };
    }
    MapModalComponent.prototype.ngOnInit = function () { };
    MapModalComponent.prototype.onMapClick = function (event) {
        this.markedPosition = event.latLng.toJSON();
        console.log(this.markedPosition);
    };
    MapModalComponent.prototype.onCancel = function () {
        this.modalController.dismiss();
    };
    MapModalComponent.prototype.onAccept = function () {
        this.modalController.dismiss(this.markedPosition);
    };
    MapModalComponent.prototype.onMapMarkDragEnd = function (event) {
        this.markedPosition = event.latLng.toJSON();
        console.log(this.markedPosition);
    };
    MapModalComponent = __decorate([
        core_1.Component({
            selector: 'app-map-modal',
            templateUrl: './map-modal.component.html',
            styleUrls: ['./map-modal.component.scss']
        })
    ], MapModalComponent);
    return MapModalComponent;
}());
exports.MapModalComponent = MapModalComponent;
