import {by, element} from "protractor";

export class WelcomePage {

    //welcome page
    pageLogo = element(by.css(".c_header__logo-container"));
    signUpButton = element(by.css(".dropdown.dropdown--signup .dropdown__main-link"));
    signInButton = element(by.css(".dropdown.dropdown--login .dropdown__toggle"));

    checkLogoVisibility() {
        return this.pageLogo.isDisplayed();
    }

    register() {
        this.signUpButton.click();
    }

    login() {
        this.signInButton.click();
    }
}