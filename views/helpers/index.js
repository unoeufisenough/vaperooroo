module.exports = function () {
	 var _helpers = {};
   _helpers.iflt = function (a, b, options) {
   		if (a < b) {
   			return options.fn(this);
   		} else {
   			return options.inverse(this);
   		}
   	};

   	_helpers.iflte = function (a, b, options) {
   		if (a <= b) { // eslint-disable-line eqeqeq
   			return options.fn(this);
   		} else {
   			return options.inverse(this);
   		}
   	};

   	_helpers.ifgte = function (a, b, options) {
   		if (a >= b) { // eslint-disable-line eqeqeq
   			return options.fn(this);
   		} else {
   			return options.inverse(this);
   		}
   	};

   	_helpers.ifgt = function (a, b, options) {
   		if (a > b) { // eslint-disable-line eqeqeq
   			return options.fn(this);
   		} else {
   			return options.inverse(this);
   		}
   	};

    _helpers.ifeq = function (a, b, options) {
   		if (a == b) { // eslint-disable-line eqeqeq
   			return options.fn(this);
   		} else {
   			return options.inverse(this);
   		}
   	};

   	_helpers.ifundefined = function (a, options) {
   		if (a == undefined) { // eslint-disable-line eqeqeq
   			return options.fn(this);
   		} else {
   			return options.inverse(this);
   		}
   	};

   	_helpers.ifdefined = function (a, options) {
   		if (a !== undefined) { // eslint-disable-line eqeqeq
   			return options.fn(this);
   		} else {
   			return options.inverse(this);
   		}
   	};
    return _helpers;
};
