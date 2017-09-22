"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var WelcomePage_1 = require("../Pages/WelcomePage");
var LoginPage_1 = require("../Pages/LoginPage");
var RegisterPage_1 = require("../Pages/RegisterPage");
var MainPage_1 = require("../Pages/MainPage");
describe('Good Films page load', function () {
    beforeEach(function () {
        protractor_1.browser.driver.get('https://www.udemy.com/'); // Entering application url in browser
    });
    var welcomePage = new WelcomePage_1.WelcomePage();
    var loginPage = new LoginPage_1.LoginPage();
    var registerPage = new RegisterPage_1.RegisterPage();
    var mainPage = new MainPage_1.MainPage();
    //page load
    xit('should load welcome page', function () {
        expect(welcomePage.checkLogoVisibility()).toBeTruthy();
    });
    //register
    xit('should create a new account', function () {
        welcomePage.register();
        //expect(registerPage.checkPage()).toContain("Sign Up");
        registerPage.createAccount("Ciuciuc Ramona", "ciuciuc.ramona04@gmail.com", "123P@ssword");
    });
    //check login elements visibility
    xit('fields should be present', function () {
        welcomePage.login();
        expect(loginPage.checkOtherLoginOptions()).toBeTruthy();
        expect(loginPage.checkElementsPresent()).toBeTruthy();
        expect(loginPage.forgotPasswordIsDisp()).toBeTruthy();
        expect(loginPage.checkTermsOfUsePresent()).toBeTruthy();
        expect(loginPage.checkSignUpOptionPresent()).toBeTruthy();
    });
    //login with correct credentials
    it('should login', function () {
        welcomePage.login();
        expect(loginPage.checkPage()).toContain("Log In");
        expect(loginPage.forgotPasswordIsDisp()).toBeTruthy();
        loginPage.loginUser("ciuciuc.ramona04@gmail.com", "123P@ssword");
        loginPage.logoutUser();
    });
    //login with incorrect credentials
    it('should display auth error', function () {
        welcomePage.login();
        expect(loginPage.checkPage()).toContain("Log In");
        loginPage.loginUser("ciucisasuc.ramona04@gmail.com", "12ac3p@ssword");
        expect(loginPage.getInvalidAuthError()).toContain("Please check your email and password.");
    });
    //login with invalid email address
    it('should display auth error', function () {
        welcomePage.login();
        expect(loginPage.checkPage()).toContain("Log In");
        loginPage.loginUser("ramona@gr", "12ac3p@ssword");
        expect(loginPage.getInvalidAuthError()).toContain("Enter a valid email address.");
    });
    //test case sensitivity
    it('should display auth error', function () {
        welcomePage.login();
        expect(loginPage.checkPage()).toContain("Log In");
        loginPage.loginUser("ciuciuc.ramona04@gmail.com", "123p@ssword");
        expect(loginPage.getInvalidAuthError()).toContain("Please check your email and password.");
    });
    //empty username field and correct password
    it('should display auth error', function () {
        welcomePage.login();
        expect(loginPage.checkPage()).toContain("Log In");
        loginPage.loginUser("", "123P@ssword");
        expect(loginPage.emptyEmail()).toBeTruthy();
    });
    //empty password field and correct email
    it('should display auth error', function () {
        welcomePage.login();
        expect(loginPage.checkPage()).toContain("Log In");
        loginPage.loginUser("ciuciuc.ramona04@gmail.com", "");
        expect(loginPage.emptyPassword()).toBeTruthy();
    });
    //incomplete username and correct password field
    it('should display auth error', function () {
        welcomePage.login();
        expect(loginPage.checkPage()).toContain("Log In");
        loginPage.loginUser("ramo", "123P@ssword");
        expect(loginPage.emptyEmail()).toBeTruthy();
    });
});
