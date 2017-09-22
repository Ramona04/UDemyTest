import {by, element} from "protractor";

export class MainPage {

    searchBox = element(by.css("#q"));
    searchButton = element(by.css(".udi.udi-search.c_quick-search__btn"));

    searchCourse() {
        this.searchBox.sendKeys("Python");
        this.searchButton.click();
    }
}