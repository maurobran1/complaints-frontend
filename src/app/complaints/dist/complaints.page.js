"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ComplaintsPage = void 0;
var core_1 = require("@angular/core");
var ComplaintsPage = /** @class */ (function () {
    function ComplaintsPage(complaintService) {
        this.complaintService = complaintService;
    }
    ComplaintsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.complaintService.getComplaints().subscribe(function (complaints) {
            console.log(complaints);
            _this.complaints = complaints;
        });
    };
    ComplaintsPage.prototype.searchComplaint = function (event) {
        this.searchText = event.target.value;
    };
    ComplaintsPage.prototype.getFormattedDate = function (date) {
        if (!date) {
            return "";
        }
        console.log("asd");
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return date.getDay() + "-" + date.getMonth() + "-" + date.getFullYear() + ", " + date.getHours() + ":" + date.getMinutes();
    };
    ComplaintsPage = __decorate([
        core_1.Component({
            selector: 'app-complaints',
            templateUrl: './complaints.page.html',
            styleUrls: ['./complaints.page.scss']
        })
    ], ComplaintsPage);
    return ComplaintsPage;
}());
exports.ComplaintsPage = ComplaintsPage;
