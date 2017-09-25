"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var WelcomePage_1 = require("../Pages/WelcomePage");
var LoginPage_1 = require("../Pages/LoginPage");
var RegisterPage_1 = require("../Pages/RegisterPage");
var MainPage_1 = require("../Pages/MainPage");
var Data_1 = require("../Data/Data");
describe('Good Films page load', function () {
    beforeEach(function () {
        protractor_1.browser.driver.get('https://www.udemy.com/'); // Entering application url in browser
    });
    var welcomePage = new WelcomePage_1.WelcomePage();
    var loginPage = new LoginPage_1.LoginPage();
    var registerPage = new RegisterPage_1.RegisterPage();
    var mainPage = new MainPage_1.MainPage();
    //page load
    it('should load welcome page', function () {
        expect(welcomePage.checkLogoVisibility()).toBeTruthy();
    });
    //register
    it('should create a new account', function () {
        welcomePage.register();
        //expect(registerPage.checkPage()).toContain("Sign Up");
        registerPage.createAccount(Data_1.myTestData.RegisterName, Data_1.myTestData.RegisterEmail, Data_1.myTestData.RegisterPassword);
    });
    //check login elements visibility
    it('fields should be present', function () {
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
        expect(loginPage.checkPage()).toContain(Data_1.myTestData.LoginMessage);
        expect(loginPage.forgotPasswordIsDisp()).toBeTruthy();
        loginPage.loginUser(Data_1.myTestData.loginUsername, Data_1.myTestData.loginPassword);
        loginPage.logoutUser();
    });
    //login with incorrect credentials
    it('should display auth error', function () {
        welcomePage.login();
        expect(loginPage.checkPage()).toContain(Data_1.myTestData.LoginMessage);
        loginPage.loginUser(Data_1.incorrectData.loginUsername, Data_1.incorrectData.loginPassword);
        expect(loginPage.getInvalidAuthError()).toContain(Data_1.incorrectData.authErrorMessage);
    });
    //login with invalid email address
    it('should display auth error', function () {
        welcomePage.login();
        expect(loginPage.checkPage()).toContain("Log In");
        loginPage.loginUser(Data_1.invalidEmailData.loginUsername, Data_1.invalidEmailData.loginPassword);
        expect(loginPage.getInvalidAuthError()).toContain(Data_1.invalidEmailData.invalidEmailMessage);
    });
    //test case sensitivity
    it('should display auth error', function () {
        welcomePage.login();
        expect(loginPage.checkPage()).toContain("Log In");
        loginPage.loginUser(Data_1.caseSensData.loginUsername, Data_1.caseSensData.loginPassword);
        expect(loginPage.getInvalidAuthError()).toContain(Data_1.incorrectData.authErrorMessage);
    });
    //empty username field and correct password
    it('should display auth error', function () {
        welcomePage.login();
        expect(loginPage.checkPage()).toContain("Log In");
        loginPage.loginUser(Data_1.emptyUnameData.loginUsername, Data_1.emptyUnameData.loginPassword);
        expect(loginPage.emptyEmail()).toBeTruthy();
    });
    //empty password field and correct email
    it('should display auth error', function () {
        welcomePage.login();
        expect(loginPage.checkPage()).toContain("Log In");
        loginPage.loginUser(Data_1.emptyPwodData.loginUsername, Data_1.emptyPwodData.loginPassword);
        expect(loginPage.emptyPassword()).toBeTruthy();
    });
    //incomplete username and correct password field
    it('should display auth error', function () {
        welcomePage.login();
        expect(loginPage.checkPage()).toContain(Data_1.myTestData.LoginMessage);
        loginPage.loginUser(Data_1.incompleteUname.loginUsername, Data_1.incompleteUname.loginPassword);
        expect(loginPage.emptyEmail()).toBeTruthy();
    });
});
