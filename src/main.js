// stacktrace

var getRawTrace = function() {
	var error = new Error();
	return error.stack;
};

module.exports = {
	getRawTrace: getRawTrace
};
