"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var MainPage = /** @class */ (function () {
    function MainPage() {
        this.searchBox = protractor_1.element(protractor_1.by.css("#q"));
        this.searchButton = protractor_1.element(protractor_1.by.css(".udi.udi-search.c_quick-search__btn"));
    }
    MainPage.prototype.searchCourse = function () {
        this.searchBox.sendKeys("Python");
        this.searchButton.click();
    };
    return MainPage;
}());
exports.MainPage = MainPage;
