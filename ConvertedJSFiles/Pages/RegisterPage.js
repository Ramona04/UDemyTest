"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var RegisterPage = /** @class */ (function () {
    function RegisterPage() {
        this.loginMessage = protractor_1.element(protractor_1.by.css(".loginbox-v4__header"));
        this.fullName = protractor_1.element(protractor_1.by.css("#id_fullname"));
        this.email = protractor_1.element(protractor_1.by.css("#id_email"));
        this.password = protractor_1.element(protractor_1.by.css("#id_password"));
        this.signUpButton = protractor_1.element(protractor_1.by.css("#submit-id-submit"));
    }
    RegisterPage.prototype.checkPage = function () {
        return this.loginMessage.getText();
    };
    RegisterPage.prototype.createAccount = function (fName, uEmail, uPassword) {
        this.fullName.sendKeys(fName);
        this.email.sendKeys(uEmail);
        this.password.sendKeys(uPassword);
        this.signUpButton.click();
    };
    return RegisterPage;
}());
exports.RegisterPage = RegisterPage;
