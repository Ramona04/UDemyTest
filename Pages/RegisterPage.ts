import {by, element} from "protractor";

export class RegisterPage {

    loginMessage = element(by.css(".loginbox-v4__header"));

    fullName = element(by.css("#id_fullname"));
    email = element(by.css("#id_email"));
    password = element(by.css("#id_password"));

    signUpButton = element(by.css("#submit-id-submit"));

    checkPage() {
        return this.loginMessage.getText();
    }

    createAccount(fName, uEmail, uPassword) {
        this.fullName.sendKeys(fName);
        this.email.sendKeys(uEmail);
        this.password.sendKeys(uPassword);

        this.signUpButton.click();
    }
}