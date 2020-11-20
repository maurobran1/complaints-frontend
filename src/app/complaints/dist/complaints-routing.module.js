"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ComplaintsPageRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var complaints_page_1 = require("./complaints.page");
var routes = [
    {
        path: '',
        component: complaints_page_1.ComplaintsPage
    },
    {
        path: 'new-complaint',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./new-complaint/new-complaint.module'); }).then(function (m) { return m.NewComplaintPageModule; }); }
    },
    {
        path: 'map',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./map/map.module'); }).then(function (m) { return m.MapPageModule; }); }
    },
    {
        path: ':complaintId',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./complaint-detail/complaint-detail.module'); }).then(function (m) { return m.ComplaintDetailPageModule; }); }
    },
];
var ComplaintsPageRoutingModule = /** @class */ (function () {
    function ComplaintsPageRoutingModule() {
    }
    ComplaintsPageRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ComplaintsPageRoutingModule);
    return ComplaintsPageRoutingModule;
}());
exports.ComplaintsPageRoutingModule = ComplaintsPageRoutingModule;
