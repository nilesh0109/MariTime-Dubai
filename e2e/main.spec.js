'use strict';

describe('The Index view', function() {
    var page;

    beforeEach(function() {
        browser.get('/#/');
        page = require('./main.po');
    });

    it('should include basic view with header and footer', function() {
        expect(page.footer.getText()).toBe('&copy; 2016 Dubai Maritime Cluster Office. All Rights Reserved.');
        expect(page.logo.getAttribute('src')).toMatch(/assets\/images\/common\/logo.png$/);
    });
});