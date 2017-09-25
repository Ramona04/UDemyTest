import {browser} from "protractor";

import {WelcomePage} from "../Pages/WelcomePage";
import {LoginPage} from "../Pages/LoginPage";
import {RegisterPage} from "../Pages/RegisterPage";
import {MainPage} from "../Pages/MainPage";

import {myTestData, incorrectData, invalidEmailData, caseSensData, emptyUnameData, emptyPwodData, incompleteUname} from "../Data/Data";

describe('Good Films page load', function () { //Suite in Jasmine

    beforeEach(function () {
        browser.driver.get('https://www.udemy.com/'); // Entering application url in browser
    });

    var welcomePage = new WelcomePage();
    var loginPage = new LoginPage();
    var registerPage = new RegisterPage();
    var mainPage = new MainPage();

    //page load
    it('should load welcome page', function () {
        expect(welcomePage.checkLogoVisibility()).toBeTruthy();

    });

    //register
    it('should create a new account', function () { // Test in Jasmine
        welcomePage.register();
        //expect(registerPage.checkPage()).toContain("Sign Up");
        registerPage.createAccount(myTestData.RegisterName, myTestData.RegisterEmail, myTestData.RegisterPassword);
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
        expect(loginPage.checkPage()).toContain(myTestData.LoginMessage);
        expect(loginPage.forgotPasswordIsDisp()).toBeTruthy();
        loginPage.loginUser(myTestData.loginUsername, myTestData.loginPassword);
        loginPage.logoutUser();
    })

    //login with incorrect credentials
    it('should display auth error', function () {
        welcomePage.login();
        expect(loginPage.checkPage()).toContain(myTestData.LoginMessage);
        loginPage.loginUser(incorrectData.loginUsername, incorrectData.loginPassword);
        expect(loginPage.getInvalidAuthError()).toContain(incorrectData.authErrorMessage);
    });

    //login with invalid email address
    it('should display auth error', function () {
        welcomePage.login();
        expect(loginPage.checkPage()).toContain("Log In");
        loginPage.loginUser(invalidEmailData.loginUsername, invalidEmailData.loginPassword);
        expect(loginPage.getInvalidAuthError()).toContain(invalidEmailData.invalidEmailMessage);
    });

    //test case sensitivity
    it('should display auth error', function () {
        welcomePage.login();
        expect(loginPage.checkPage()).toContain("Log In");
        loginPage.loginUser(caseSensData.loginUsername, caseSensData.loginPassword);
        expect(loginPage.getInvalidAuthError()).toContain(incorrectData.authErrorMessage);
    });

    //empty username field and correct password
    it('should display auth error', function () {
        welcomePage.login();
        expect(loginPage.checkPage()).toContain("Log In");
        loginPage.loginUser(emptyUnameData.loginUsername, emptyUnameData.loginPassword);
        expect(loginPage.emptyEmail()).toBeTruthy();
    });

    //empty password field and correct email
    it('should display auth error', function () {
        welcomePage.login();
        expect(loginPage.checkPage()).toContain("Log In");
        loginPage.loginUser(emptyPwodData.loginUsername, emptyPwodData.loginPassword);
        expect(loginPage.emptyPassword()).toBeTruthy();
    });

    //incomplete username and correct password field
    it('should display auth error', function () {
        welcomePage.login();
        expect(loginPage.checkPage()).toContain(myTestData.LoginMessage);
        loginPage.loginUser(incompleteUname.loginUsername, incompleteUname.loginPassword);
        expect(loginPage.emptyEmail()).toBeTruthy();
    });
});