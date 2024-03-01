/**
 * @jest-environment jsdom
 */

const button = require("../button");

beforeAll(() => {
	let fs = require("fs");
	let fileContents = fs.readFileSync("index.html", "utf-8");
	document.open();
	document.write(fileContents);
	document.close();
});

describe("DOM tests", () => {
	test("Expects content to change", () => {
		button.buttonClick();
		expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
	});
	test("h1 should exist", () => {
		expect(document.getElementsByTagName("h1").length).toBe(2);
	});
	test("Expects content to change second", () => {
		button.buttonClicks();
		expect(document.getElementById("par").innerHTML).toEqual("Yous Clickeds");
	});
});
