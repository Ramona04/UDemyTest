"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var WelcomePage = /** @class */ (function () {
    function WelcomePage() {
        //welcome page
        this.pageLogo = protractor_1.element(protractor_1.by.css(".c_header__logo-container"));
        this.signUpButton = protractor_1.element(protractor_1.by.css(".dropdown.dropdown--signup .dropdown__main-link"));
        this.signInButton = protractor_1.element(protractor_1.by.css(".dropdown.dropdown--login .dropdown__toggle"));
    }
    WelcomePage.prototype.checkLogoVisibility = function () {
        return this.pageLogo.isDisplayed();
    };
    WelcomePage.prototype.register = function () {
        this.signUpButton.click();
    };
    WelcomePage.prototype.login = function () {
        this.signInButton.click();
    };
    return WelcomePage;
}());
exports.WelcomePage = WelcomePage;
