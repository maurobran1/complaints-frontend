"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FilterPipe = void 0;
var core_1 = require("@angular/core");
var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (complaints, text) {
        if (text === void 0) { text = ""; }
        if (text.length === 0) {
            return complaints;
        }
        text = text.toLowerCase().replace(new RegExp(' ', 'g'), '');
        return complaints.filter(function (complaint) {
            var shortDate = complaint.date.toLocaleDateString().replace(new RegExp(' ', 'g'), '').substring(0, 4) + complaint.date.toLocaleDateString().replace(new RegExp(' ', 'g'), '').substring(6);
            return (complaint.plate.toLowerCase().replace(new RegExp(' ', 'g'), '').includes(text) ||
                complaint.state.toLowerCase().replace(new RegExp(' ', 'g'), '').includes(text) ||
                complaint.type.toLowerCase().replace(new RegExp(' ', 'g'), '').includes(text) ||
                complaint.typeID.toLowerCase().replace(new RegExp(' ', 'g'), '').includes(text) ||
                complaint.stateID.toLowerCase().replace(new RegExp(' ', 'g'), '').includes(text) ||
                complaint.location.address.toLowerCase().replace(new RegExp(' ', 'g'), '').includes(text) ||
                complaint._id.toLowerCase().replace(new RegExp(' ', 'g'), '').includes(text) ||
                complaint.notes.toLowerCase().replace(new RegExp(' ', 'g'), '').includes(text) ||
                complaint.date.toLocaleDateString().replace(new RegExp(' ', 'g'), '').includes(text) ||
                complaint.date.toLocaleDateString().replace(new RegExp(' ', 'g'), '').replace(new RegExp('/', 'g'), '-').includes(text) ||
                shortDate.includes(text) ||
                shortDate.replace(new RegExp('/', 'g'), '-').includes(text));
        });
    };
    FilterPipe = __decorate([
        core_1.Pipe({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());
exports.FilterPipe = FilterPipe;
