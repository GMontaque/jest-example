const addition = require("../calc");

describe("Calculator", () => {
	describe("Addition function", () => {
		test("should return 42 for 20 + 22", () => {
			expect(addition.addition(20, 22, "add")).toBe(42);
		});
		test("should return error string", () => {
			expect(addition.addition(20, "22", "add")).toBe("error String");
		});
		test("should return 73 for 42 + 31", () => {
			expect(addition.addition(42, 31, "add")).toBe(73);
		});
	});
	describe("Subbtraction function", () => {
		test("should return 191 for 200 - 9", () => {
			expect(addition.addition(200, 9, "sub")).toBe(191);
		});
	});
	describe("no value", () => {
		test("should return NAN when no value entered", () => {
			expect(addition.addition()).toBe(NaN);
		});
	});
	describe("multipilcation function", () => {});
	describe("Dividtion function", () => {});
});
