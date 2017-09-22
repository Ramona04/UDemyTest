"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('Good Films page load', function () {
    it('should load the Good Films page', function () {
        protractor_1.browser.driver.get('https://goodfil.ms/'); // Entering application url in browser
    });
});
