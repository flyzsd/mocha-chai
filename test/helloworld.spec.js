"use strict";

const chai = require('chai');
const expect = chai.expect;

before(async function() {
    console.log('before at root-level');
});

after(async function() {
    console.log('after at root-level');
});

beforeEach(async function() {
    console.log('beforeEach at root-level');
});

afterEach(async function() {
    console.log('afterEach at root-level');
});

describe('hello world', () => {

    before(async function() {
        console.log("before");
    });

    after(async function() {
        console.log("after");
    });

    beforeEach(async function() {
        console.log("beforeEach");
    });

    afterEach(async function() {
        console.log("afterEach");
    });

    it('should work just as expected without arrow function', async function() {
        console.log(this);
        expect(this).to.be.an('object');
        expect(this.test).to.be.an('object');
    });

    it('should work just as expected with arrow function', async () => {
        console.log(this);
        expect(this).to.be.an('object');
        expect(this.test).to.be.an('undefined');
    });

    it('pending test to be written');

    // it.only('should only run the exclusive tests', async function() {
    //     // Specify this test to only retry up to 2 times
    //     this.retries(2);
    //     this.slow(10000);
    //     this.timeout(500);
    //     console.log('exclusive test');
    //
    // });

    it.skip('should skip this test', async () => {
        // this test will not be run
    });
});
