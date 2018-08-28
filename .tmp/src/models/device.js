var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Device = (function () {
    function Device(fields) {
        this.securitySystem = SecuritySystem;
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }
    return Device;
}());
export { Device };
/* Model if you are using database - the data structures with all properties ...*/
var Core_Device = (function () {
    function Core_Device(DeviceName, DeviceDescription, DeviceStatus, DeviceCategory) {
        this.DeviceName = DeviceName;
        this.DeviceDescription = DeviceDescription;
        this.DeviceStatus = DeviceStatus;
        this.DeviceCategory = DeviceCategory;
    }
    return Core_Device;
}());
export { Core_Device };
var SecuritySystem = (function () {
    //default constructor
    function SecuritySystem() {
        this.SecuritySystemServices = true;
        this.GarageDoors = false;
    }
    SecuritySystem.prototype.getSecuritySystemStatus = function () {
        return this.SecuritySystemServices;
    };
    SecuritySystem.prototype.getSecuritySystemStatusHumanReadable = function () {
        var securitySystemStatusHumanReadable;
        if (this.getSecuritySystemStatus() == false) {
            securitySystemStatusHumanReadable = "Disarmed";
        }
        else {
            securitySystemStatusHumanReadable = "Armed";
        }
        return securitySystemStatusHumanReadable;
    };
    SecuritySystem.prototype.DisarmTheSecuritySystem = function (SecuritySystemServices) {
        this.SecuritySystemServices = SecuritySystemServices;
    };
    SecuritySystem.prototype.ArmTheSecuritySystem = function (SecuritySystemServices) {
        this.SecuritySystemServices = SecuritySystemServices;
    };
    SecuritySystem.prototype.getGarageDoorsStatus = function () {
        return this.GarageDoors;
    };
    SecuritySystem.prototype.getGarageDoorsStatusHumanReadable = function () {
        var garageDoorsStatus;
        if (this.getGarageDoorsStatus() == false) {
            garageDoorsStatus = "Closed";
        }
        else {
            garageDoorsStatus = "Opened";
        }
        return garageDoorsStatus;
    };
    SecuritySystem.prototype.OpenCloseGarageDoors = function (GarageDoors) {
        this.GarageDoors = GarageDoors;
    };
    SecuritySystem = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], SecuritySystem);
    return SecuritySystem;
}());
export { SecuritySystem };
var categoriesWithIcons = (function () {
    function categoriesWithIcons() {
    }
    return categoriesWithIcons;
}());
export { categoriesWithIcons };
export var categories;
(function (categories) {
    categories["SecurityDevices"] = "Security Devices";
    categories["ThermostatsDevices"] = "Thermostat Devices";
    categories["CamerasDevices"] = "Camera Devices";
    categories["DoorDevices"] = "Door Devices";
    categories["OtherDevices"] = "Other Devices";
})(categories || (categories = {}));
//# sourceMappingURL=device.js.map