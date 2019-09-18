"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moleculer_decorators_1 = require("moleculer-decorators");
const GlobalResponse_1 = __importDefault(require("../handler/GlobalResponse"));
let test = class test extends moleculer_decorators_1.BaseSchema {
    t(ctx) {
        // console.log(ctx)
        return GlobalResponse_1.default.successResponse(ctx, 200, "hello form test", {});
    }
};
__decorate([
    moleculer_decorators_1.Action()
], test.prototype, "t", null);
test = __decorate([
    moleculer_decorators_1.Service({ name: "arpittest" })
], test);
module.exports = test;
//# sourceMappingURL=test.service.js.map