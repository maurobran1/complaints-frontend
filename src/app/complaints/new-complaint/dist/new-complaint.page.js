"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.NewComplaintPage = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var core_2 = require("@capacitor/core");
var map_modal_component_1 = require("src/app/map-modal/map-modal.component");
var Geolocation = core_2.Plugins.Geolocation;
var Keyboard = core_2.Plugins.Keyboard;
var NewComplaintPage = /** @class */ (function () {
    function NewComplaintPage(googleMapsService, complaintTypeService, complaintsService, actionSheetController, alertController, toastController, modalController, photoService, sanitizer, router, activatedRoute) {
        this.googleMapsService = googleMapsService;
        this.complaintTypeService = complaintTypeService;
        this.complaintsService = complaintsService;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.toastController = toastController;
        this.modalController = modalController;
        this.photoService = photoService;
        this.sanitizer = sanitizer;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.capturedPhotos = [];
        this.nowLocaleISOString = (new Date(Date.now() - ((new Date()).getTimezoneOffset() * 60000))).toISOString().slice(0, -1);
    }
    NewComplaintPage.prototype.ngOnInit = function () {
        var _this = this;
        this.complaintTypeService.getComplaints().pipe(operators_1.first())
            .subscribe(function (complaintTypes) {
            console.log(complaintTypes);
            _this.complaintTypes = complaintTypes;
        });
    };
    NewComplaintPage.prototype.onSubmit = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var newComplaint, photos, _i, _a, capturedPhoto, response, blob;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!form.valid) {
                            return [2 /*return*/];
                        }
                        newComplaint = {
                            typeID: form.value.typeID,
                            plate: form.value.plate,
                            location: {
                                coordinates: this.selectedLocation,
                                address: form.value.address
                            },
                            date: form.value.date,
                            notes: form.value.notes
                        };
                        photos = [];
                        _i = 0, _a = this.capturedPhotos;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        capturedPhoto = _a[_i];
                        return [4 /*yield*/, fetch(capturedPhoto.webPath)];
                    case 2:
                        response = _b.sent();
                        return [4 /*yield*/, response.blob()];
                    case 3:
                        blob = _b.sent();
                        photos.push(blob);
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 1];
                    case 5:
                        this.complaintsService.addComplaint(newComplaint, photos).pipe(operators_1.first()).subscribe(function (complaint) {
                            if (complaint) {
                                _this.presentToast('Denuncia realizada correctamente', 3000);
                                console.log(complaint);
                                form.reset();
                                _this.capturedPhotos = [];
                                _this.selectedLocation = {};
                                _this.router.navigate(["../../", complaint._id], { relativeTo: _this.activatedRoute });
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    NewComplaintPage.prototype.presentToast = function (message, duration) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: duration
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewComplaintPage.prototype.chooseDirectionMode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Elija una opción',
                            buttons: [{
                                    text: 'Seleccionar la ubicación en el mapa',
                                    icon: 'map-outline',
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                        var modal;
                                        var _this = this;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.modalController.create({ component: map_modal_component_1.MapModalComponent })];
                                                case 1:
                                                    modal = _a.sent();
                                                    modal.onDidDismiss().then(function (modalData) {
                                                        if (!modalData.data) {
                                                            console.log('USUARIO CANCELó');
                                                            return;
                                                        }
                                                        _this.selectedLocation = modalData.data;
                                                        _this.coordinatesInput.value = modalData.data.lat + ", " + modalData.data.lng;
                                                        console.log(_this.selectedLocation);
                                                        _this.googleMapsService.getAddress(_this.selectedLocation.lat, _this.selectedLocation.lng).subscribe(function (address) {
                                                            _this.addressInput.value = address;
                                                        });
                                                    });
                                                    modal.present();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                },
                                {
                                    text: 'Ingresar la dirección por teclado',
                                    icon: 'chatbox-ellipses-outline',
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            this.addressInput.value = "";
                                            this.addressInput.disabled = false;
                                            this.addressInput.setFocus();
                                            Keyboard.show();
                                            return [2 /*return*/];
                                        });
                                    }); }
                                },
                                {
                                    text: 'Utilizar la ubicación de mi dispositivo',
                                    icon: 'phone-portrait-outline',
                                    handler: function () {
                                        _this.getCurrentPosition();
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewComplaintPage.prototype.getCurrentPosition = function () {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!core_2.Capacitor.isPluginAvailable('Geolocation')) {
                            this.showErrorAlert();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, Geolocation.getCurrentPosition().
                                then(function (value) {
                                _this.selectedLocation = { lat: value.coords.latitude, lng: value.coords.longitude };
                                _this.coordinatesInput.value = value.coords.latitude + ", " + value.coords.longitude;
                                _this.googleMapsService.getAddress(_this.selectedLocation.lat, _this.selectedLocation.lng).subscribe(function (formattedAddress) {
                                    console.log(formattedAddress);
                                    _this.addressInput.value = formattedAddress;
                                });
                            })["catch"](function (reason) {
                                _this.showErrorAlert();
                                console.log('Error en getCurrentPosition: ', reason);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewComplaintPage.prototype.showErrorAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'No se pudo determinar la ubicación del dispositivo',
                            message: 'Por favor usa el mapa para elegir la ubicación'
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewComplaintPage.prototype.takePhoto = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = this.capturedPhotos).push;
                        return [4 /*yield*/, this.photoService.takePhoto()];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        // this.capturedPhoto = await this.photoService.takePhoto();
                        console.log(this.capturedPhotos);
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        core_1.ViewChild('addressInput')
    ], NewComplaintPage.prototype, "addressInput");
    __decorate([
        core_1.ViewChild('coordinatesInput')
    ], NewComplaintPage.prototype, "coordinatesInput");
    NewComplaintPage = __decorate([
        core_1.Component({
            selector: 'app-new-complaint',
            templateUrl: './new-complaint.page.html',
            styleUrls: ['./new-complaint.page.scss']
        })
    ], NewComplaintPage);
    return NewComplaintPage;
}());
exports.NewComplaintPage = NewComplaintPage;
