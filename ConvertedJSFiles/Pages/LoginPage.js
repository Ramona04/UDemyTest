"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var LoginPage = /** @class */ (function () {
    function LoginPage() {
        this.loginMessage = protractor_1.element(protractor_1.by.css(".loginbox-v4__header"));
        this.loginWFacebookButton = protractor_1.element(protractor_1.by.css(".js-facebook-btn"));
        this.loginWGoogleButton = protractor_1.element(protractor_1.by.css(".js-google-btn"));
        this.email = protractor_1.element(protractor_1.by.css("#id_email"));
        this.password = protractor_1.element(protractor_1.by.css("#id_password"));
        this.loginButton = protractor_1.element(protractor_1.by.css("#submit-id-submit"));
        this.termsOfUse = protractor_1.element(protractor_1.by.css(".loginbox-v4__secondary-text"));
        this.signUpOption = protractor_1.element(protractor_1.by.css(".sign-link"));
        this.accOptionsButton = protractor_1.element(protractor_1.by.css(".user__no-avatar"));
        this.logoutButton = protractor_1.element(protractor_1.by.xpath(".//*[@class='dropdown__menu  ']/ul[2]/li[2]/a"));
        this.forgotPasswordOption = protractor_1.element(protractor_1.by.css(".cancel-link"));
        this.authErrorMessage = protractor_1.element(protractor_1.by.css(".form-errors.alert.alert-block.alert-danger"));
    }
    LoginPage.prototype.checkPage = function () {
        return this.loginMessage.getText();
    };
    LoginPage.prototype.checkOtherLoginOptions = function () {
        return this.loginWFacebookButton.isEnabled() && this.loginWGoogleButton.isEnabled();
    };
    LoginPage.prototype.checkElementsPresent = function () {
        return this.email.isDisplayed() && this.password.isDisplayed() && this.loginButton.isEnabled();
    };
    LoginPage.prototype.forgotPasswordIsDisp = function () {
        return this.forgotPasswordOption.isEnabled();
    };
    LoginPage.prototype.checkTermsOfUsePresent = function () {
        return this.termsOfUse.isDisplayed();
    };
    LoginPage.prototype.checkSignUpOptionPresent = function () {
        return this.signUpOption.isDisplayed();
    };
    LoginPage.prototype.loginUser = function (usnm, pwod) {
        this.email.sendKeys(usnm);
        this.password.sendKeys(pwod);
        this.loginButton.click();
    };
    LoginPage.prototype.logoutUser = function () {
        protractor_1.browser.actions().mouseMove(this.accOptionsButton).perform();
        this.logoutButton.click();
    };
    LoginPage.prototype.getInvalidAuthError = function () {
        return this.authErrorMessage.getText();
    };
    LoginPage.prototype.emptyEmail = function () {
        return this.email.getAttribute("aria-invalid");
    };
    LoginPage.prototype.emptyPassword = function () {
        return this.password.getAttribute("aria-invalid");
    };
    return LoginPage;
}());
exports.LoginPage = LoginPage;
