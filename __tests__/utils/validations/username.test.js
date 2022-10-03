import validateUsername from "../../../utils/validations/username/index";
import validationMessages from "../../../dummyData/validationMessages/username.json";
describe("validate username", () => {
	it("check when username is empty ", () => {
		expect(validateUsername(" ")).toEqual({
			error: true,
			messages: [
				{ text: validationMessages.emptyUsername },
				{ text: validationMessages.lessThanThreeChars },
			],
		});
	});
	it("check when username is not empty and less than four chars ", () => {
		expect(validateUsername("abs")).toEqual({
			error: true,
			messages: [{ text: validationMessages.lessThanThreeChars }],
		});
	});
	it("check when passing proper username", () => {
		expect(validateUsername("hussain")).toEqual({
			error: false,
			messages: [],
		});
	});
});
