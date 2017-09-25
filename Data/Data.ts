export var myTestData =
    {
        "loginUsername": "ciuciuc.ramona04@gmail.com",
        "loginPassword": "123P@ssword",
        "RegisterName": "Ciuciuc Ramona",
        "RegisterPassword": "123P@ssword",
        "RegisterEmail": "ciuciuc.ramona04@gmail.com",
        "LoginMessage": "Log In",
    }


// --> login with incorect credentials
export var incorrectData = {
    "loginUsername": "ciucisasuc.ramona04@gmail.com",
    "loginPassword": "12ac3p@ssword",
    "authErrorMessage": "Please check your email and password."
}

// --> login with invalid email address
export var invalidEmailData = {
    "loginUsername": "ramona@gr",
    "loginPassword": "12ac3p@ssword",
    "invalidEmailMessage": "Enter a valid email address."
}

// --> test case sensitivity
export var caseSensData = {
    "loginUsername": "ciuciuc.ramona04@gmail.com",
    "loginPassword": "123p@ssword"
}

// --> empty username field and correct password
export var emptyUnameData = {
    "loginUsername": "",
    "loginPassword": "123P@ssword"
}

// --> empty password field and correct email
export var emptyPwodData = {
    "loginUsername": "ciuciuc.ramona04@gmail.com",
    "loginPassword": ""
}

// --> incomplete username and correct password field
export var incompleteUname = {
    "loginUsername": "ramo",
    "loginPassword": "123P@ssword"
}