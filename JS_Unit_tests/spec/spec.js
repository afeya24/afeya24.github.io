var pow = require('../js/jasmineTest.js')

describe("It pow.math method", function() {
    it("It pow.math method", function() {
        //prepare
        var result1;

        //act
        result1 = pow.powNow(2,1);

        //assert
        expect(result1).toBe(2);
    });
});

describe("It pow.math method", function() {
    it("It pow.math method", function() {
        //prepare
        var result2;

        //act
        result2 = pow.powNow(2,8);

        //assert
        expect(result2).toBe(256);
    });
});

describe("It pow.math method", function() {
    it("It pow.math method", function() {
        //prepare
        var result3;

        //act
        result3 = pow.powNow(2,10);

        //assert
        expect(result3).toBe(1024);
    });
});