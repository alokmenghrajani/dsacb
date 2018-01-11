const should = require('should');
const jumpSearch = require('./jump-search');
const { expect } = require('chai');

describe('jumpSearch', () => {

    describe('withoutCallback', () => {

        it(`should return "-1"`, () => {
            expect(jumpSearch([1, 2, 3, 4, 5, 6, 7, 8], 0)).equal(-1);
        });

        it(`should return "-1" cause empty array`, () => {
            expect(jumpSearch([])).equal(-1)
        });

        it(`should return "3"`, () => {
            should.equal(jumpSearch([1, 2, 3, 4, 5, 6, 7, 8], 4), 3);
        });

        it(`should return "0"`, () => {
            expect(jumpSearch([1], 1)).equal(0);
        });

        it(`should return "-1" cause element not present`, () => {
            expect(jumpSearch([1], 0)).equal(-1);
        });

    });

    // TODO: Add test cases with callback.

});