'use strict';

require('mocha-generators').install();

var Nightmare = require('nightmare');
var chai = require('chai');
var should = require('chai').should();
var expect = require('chai').expect;

describe('a google user', function() {
    this.timeout(10000);

    var nightmare;

    beforeEach(function() {
        nightmare = Nightmare({
            show: false,
            overlayScrollbars: false,
            useContentSize: true,
            center: false
        })
            .viewport(1100, 800)
    });

    afterEach(function*() {
        yield nightmare.end();
    });

    it('should see search form on homepage', function*() {
        var searchFormExists = yield nightmare
            .goto('https://www.google.com')
            .exists('form[name="f"]')
            .exists('input[name="q"]')
            .exists('button[name="btnG"]');
        searchFormExists.should.be.true;
    });

    it('should be able to search for \'test\'', function*() {
        var resultPageUrl = yield nightmare
            .goto('https://www.google.com')
            .type('input[name="q"]','test')
            .click('button[name="btnG"]')
            .url();
        expect(resultPageUrl).to.contain('q=test');
    });
});
