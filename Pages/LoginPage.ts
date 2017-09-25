import {by, element, protractor, browser} from "protractor";


export class LoginPage{

    loginMessage = element(by.css(".loginbox-v4__header"));

    loginWFacebookButton = element(by.css(".js-facebook-btn"));
    loginWGoogleButton = element(by.css(".js-google-btn"));

    email = element(by.css("#id_email"));
    password = element(by.css("#id_password"));
    loginButton = element(by.css("#submit-id-submit"));

    termsOfUse = element(by.css(".loginbox-v4__secondary-text"));
    signUpOption = element(by.css(".sign-link"));

    accOptionsButton = element(by.css(".user__no-avatar"));
    logoutButton = element(by.xpath(".//*[@class='dropdown__menu  ']/ul[2]/li[2]/a"));
    forgotPasswordOption = element(by.css(".cancel-link"));

    authErrorMessage = element(by.css(".form-errors.alert.alert-block.alert-danger"));

    checkPage(){
        return this.loginMessage.getText();
    }

    checkOtherLoginOptions(){
        return this.loginWFacebookButton.isEnabled() && this.loginWGoogleButton.isEnabled();
    }

    checkElementsPresent(){
        return this.email.isDisplayed() && this.password.isDisplayed() && this.loginButton.isEnabled();
    }

    forgotPasswordIsDisp(){
        return this.forgotPasswordOption.isEnabled();
    }

    checkTermsOfUsePresent(){
        return this.termsOfUse.isDisplayed();
    }

    checkSignUpOptionPresent(){
        return this.signUpOption.isDisplayed();
    }

    loginUser(usnm, pwod){
        this.email.sendKeys(usnm);
        this.password.sendKeys(pwod);
        this.loginButton.click();
    }

    logoutUser(){
        browser.actions().mouseMove(this.accOptionsButton).perform();
        this.logoutButton.click();
    }

    getInvalidAuthError(){
        return this.authErrorMessage.getText();
    }

    emptyEmail(){
        return this.email.getAttribute("aria-invalid");
    }

    emptyPassword(){
        return this.password.getAttribute("aria-invalid");
    }
}