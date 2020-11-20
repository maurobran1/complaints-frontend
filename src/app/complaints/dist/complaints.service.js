"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ComplaintsService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var ComplaintsService = /** @class */ (function () {
    function ComplaintsService(httpClient, photoService) {
        this.httpClient = httpClient;
        this.photoService = photoService;
        this.API_URL = "http://localhost:5000/api/complaints/";
    }
    ComplaintsService.prototype.getComplaints = function () {
        return this.httpClient.get(this.API_URL)
            .pipe(operators_1.map(function (complaints) {
            complaints.forEach(function (complaint) {
                complaint.date = new Date(complaint.date);
                complaint.createdAt = new Date(complaint.createdAt);
                complaint.updatedAt = new Date(complaint.updatedAt);
                // complaint.imagePaths = "http://localhost:5000/" + complaint.imagePaths;
            });
            return complaints;
        }));
    };
    ComplaintsService.prototype.getComplaint = function (complaintId) {
        return this.httpClient.get("" + this.API_URL + complaintId)
            .pipe(operators_1.map(function (complaint) {
            complaint.date = new Date(complaint.date);
            complaint.createdAt = new Date(complaint.createdAt);
            complaint.updatedAt = new Date(complaint.updatedAt);
            // complaint.imagePaths = "http://localhost:5000/" + complaint.imagePaths;
            return complaint;
        }));
    };
    ComplaintsService.prototype.getComplaintTypes = function () {
        return this.httpClient.get("http://localhost:5000/api/complainttypes");
    };
    // addComplaint(complaint: Complaint) {
    //   return this.httpClient.post<any>(this.API_URL, complaint);
    // }
    // addComplaint1(complaint: Complaint, photo: Blob) {
    //   let formData = new FormData();
    //   const complaintString = JSON.stringify(complaint)
    //   formData.append('data', complaintString);
    //   formData.append('image', photo);
    //   console.log(formData.get('image'))
    //   return this.httpClient.post<any>(this.API_URL, formData);
    // }
    ComplaintsService.prototype.addComplaint = function (complaint, blobs) {
        var formData = new FormData();
        var complaintString = JSON.stringify(complaint);
        formData.append('data', complaintString);
        for (var _i = 0, blobs_1 = blobs; _i < blobs_1.length; _i++) {
            var b = blobs_1[_i];
            formData.append('image', b);
        }
        return this.httpClient.post(this.API_URL, formData);
    };
    ComplaintsService.prototype.updateComplaint = function (complaint) {
        return this.httpClient.post("" + this.API_URL + complaint._id, complaint);
    };
    ComplaintsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ComplaintsService);
    return ComplaintsService;
}());
exports.ComplaintsService = ComplaintsService;
