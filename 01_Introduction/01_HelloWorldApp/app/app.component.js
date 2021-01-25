"use strict";
// Определение компонента app.component
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// импорт декоратора Component из модуля @angular/core
var core_1 = require("@angular/core");
// Применение декоратора Component для класса AppComponent
// Декоратор используется для присвоения метаданных для класса AppComponent
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<h1>My First Angular App</h1>' // HTML разметка определяющая представление текущего компонента
        })
    ], AppComponent);
    return AppComponent;
}()); // Класс определяющий поведение компонента
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map