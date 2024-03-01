function addition(num1, num2, cal) {
	if (num1 == null || num2 == null) {
		return NaN;
	} else if (typeof num1 == "string" || typeof num2 == "string") {
		return "error String";
	}

	switch (cal) {
		case "add":
			return num1 + num2;
			break;
		case "sub":
			return num1 - num2;
			break;
	}
}

module.exports = {
	addition,
};
