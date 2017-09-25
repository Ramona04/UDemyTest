"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myTestData = {
    "loginUsername": "ciuciuc.ramona04@gmail.com",
    "loginPassword": "123P@ssword",
    "RegisterName": "Ciuciuc Ramona",
    "RegisterPassword": "123P@ssword",
    "RegisterEmail": "ciuciuc.ramona04@gmail.com",
    "LoginMessage": "Log In",
};
// --> login with incorect credentials
exports.incorrectData = {
    "loginUsername": "ciucisasuc.ramona04@gmail.com",
    "loginPassword": "12ac3p@ssword",
    "authErrorMessage": "Please check your email and password."
};
// --> login with invalid email address
exports.invalidEmailData = {
    "loginUsername": "ramona@gr",
    "loginPassword": "12ac3p@ssword",
    "invalidEmailMessage": "Enter a valid email address."
};
// --> test case sensitivity
exports.caseSensData = {
    "loginUsername": "ciuciuc.ramona04@gmail.com",
    "loginPassword": "123p@ssword"
};
// --> empty username field and correct password
exports.emptyUnameData = {
    "loginUsername": "",
    "loginPassword": "123P@ssword"
};
// --> empty password field and correct email
exports.emptyPwodData = {
    "loginUsername": "ciuciuc.ramona04@gmail.com",
    "loginPassword": ""
};
// --> incomplete username and correct password field
exports.incompleteUname = {
    "loginUsername": "ramo",
    "loginPassword": "123P@ssword"
};
