"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NewComplaintPageModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var new_complaint_routing_module_1 = require("./new-complaint-routing.module");
var new_complaint_page_1 = require("./new-complaint.page");
var map_modal_module_1 = require("src/app/map-modal/map-modal.module");
var NewComplaintPageModule = /** @class */ (function () {
    function NewComplaintPageModule() {
    }
    NewComplaintPageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                new_complaint_routing_module_1.NewComplaintPageRoutingModule,
                map_modal_module_1.MapModalModule
            ],
            declarations: [new_complaint_page_1.NewComplaintPage]
        })
    ], NewComplaintPageModule);
    return NewComplaintPageModule;
}());
exports.NewComplaintPageModule = NewComplaintPageModule;
