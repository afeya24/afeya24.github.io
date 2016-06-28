var pow = {
  powNow: function (base, exponent) {
      var myResult = 1;

      for (var i = 0; i < exponent; i++) {
        myResult = myResult * base;
      }

      return myResult;
      }
}

module.exports = pow;