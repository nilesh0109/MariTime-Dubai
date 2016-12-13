/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var IndexPage = function() {
    this.logo = element(by.css('.maritime-logo img'));
    this.footer = element(by.css('.footer-back .copyright'));
};

module.exports = new MainPage();