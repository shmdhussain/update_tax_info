import getvalidateMsgsForTaxForm from "../../utils/getvalidateMsgsForTaxForm.js";
describe("getvalidateMsgsForTaxForm", () => {
	it("check when  username, country and tax number is correct", () => {
		expect(
			getvalidateMsgsForTaxForm(
				"hussain",
				"united states of america",
				"1234-wer-1234567"
			)
		).toEqual({
			username: {
				error: false,
				messages: [],
			},
			country: {
				error: false,
				messages: [],
			},
			taxInfo: {
				error: false,
				messages: [],
			},
		});
	});
});
