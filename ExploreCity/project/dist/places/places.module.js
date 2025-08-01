"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlacesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const place_entity_1 = require("./model/place.entity");
const places_controller_1 = require("./places.controller");
const places_service_1 = require("./places.service");
const cities_service_1 = require("../cities/cities.service");
const city_entity_1 = require("../cities/model/city.entity");
let PlacesModule = class PlacesModule {
};
exports.PlacesModule = PlacesModule;
exports.PlacesModule = PlacesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([place_entity_1.Place, city_entity_1.City]),
        ],
        controllers: [places_controller_1.PlacesController,],
        providers: [places_service_1.PlacesService, cities_service_1.CitiesService],
    })
], PlacesModule);
//# sourceMappingURL=places.module.js.map