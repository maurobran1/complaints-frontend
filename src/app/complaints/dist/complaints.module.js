"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ComplaintsPageModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var complaints_routing_module_1 = require("./complaints-routing.module");
var complaints_page_1 = require("./complaints.page");
var http_1 = require("@angular/common/http");
var pipes_module_1 = require("../pipes/pipes.module");
var ComplaintsPageModule = /** @class */ (function () {
    function ComplaintsPageModule() {
    }
    ComplaintsPageModule = __decorate([
        core_1.NgModule({
            imports: [
                pipes_module_1.PipesModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                complaints_routing_module_1.ComplaintsPageRoutingModule,
                http_1.HttpClientModule,
            ],
            declarations: [complaints_page_1.ComplaintsPage],
            providers: [http_1.HttpClientModule]
        })
    ], ComplaintsPageModule);
    return ComplaintsPageModule;
}());
exports.ComplaintsPageModule = ComplaintsPageModule;
