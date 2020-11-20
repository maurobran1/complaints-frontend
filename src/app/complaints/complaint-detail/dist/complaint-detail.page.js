"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ComplaintDetailPage = void 0;
var core_1 = require("@angular/core");
var ComplaintDetailPage = /** @class */ (function () {
    function ComplaintDetailPage(activatedRoute, complaintService, googleService) {
        this.activatedRoute = activatedRoute;
        this.complaintService = complaintService;
        this.googleService = googleService;
    }
    ComplaintDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has('complaintId')) {
                console.log('paramMap no tiene complaintId');
                //redirect the user
                return;
            }
            var complaintId = paramMap.get('complaintId');
            _this.complaintService.getComplaint(complaintId).subscribe(function (complaint) {
                console.log(complaint);
                _this.loadedComplaint = complaint;
                _this.mapImage = _this.googleService.getMapImage(_this.loadedComplaint.location.coordinates.lat, _this.loadedComplaint.location.coordinates.lng, 16);
            });
        });
    };
    ComplaintDetailPage = __decorate([
        core_1.Component({
            selector: 'app-complaint-detail',
            templateUrl: './complaint-detail.page.html',
            styleUrls: ['./complaint-detail.page.scss']
        })
    ], ComplaintDetailPage);
    return ComplaintDetailPage;
}());
exports.ComplaintDetailPage = ComplaintDetailPage;
