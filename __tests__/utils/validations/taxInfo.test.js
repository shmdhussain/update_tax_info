import validateTaxInfo from "../../../utils/validations/taxInfo/index";
import validationMessages from "../../../dummyData/validationMessages/taxInfo.json";
import predefinedCountries from "../../../dummyData/countries.json";
describe("validate taxInfo for USA", () => {
	const country = "united states of america";
	it("check when taxInfo is empty ", () => {
		expect(validateTaxInfo(" ", country)).toEqual({
			error: true,
			messages: [
				{ text: validationMessages.emptyTaxInfo },
				{ text: validationMessages[country].enterInCorrectFormat },
			],
		});
	});
	it("check when taxInfo is in incorrect format ", () => {
		expect(validateTaxInfo("abc-123", country)).toEqual({
			error: true,
			messages: [{ text: validationMessages[country].enterInCorrectFormat }],
		});
	});
	it("check when taxInfo is in correct format ", () => {
		//[4 digits]-[3 letters]-[5 or 7 digits]
		expect(validateTaxInfo("1234-wer-12345", country)).toEqual({
			error: false,
			messages: [],
		});
		expect(validateTaxInfo("1234-wer-1234567", country)).toEqual({
			error: false,
			messages: [],
		});
	});
});
describe("validate taxInfo for Canada", () => {
	const country = "canada";
	it("check when taxInfo is empty ", () => {
		expect(validateTaxInfo(" ", country)).toEqual({
			error: true,
			messages: [
				{ text: validationMessages.emptyTaxInfo },
				{ text: validationMessages[country].enterInCorrectFormat },
			],
		});
	});
	it("check when taxInfo is in incorrect format ", () => {
		expect(validateTaxInfo("abc-123", country)).toEqual({
			error: true,
			messages: [{ text: validationMessages[country].enterInCorrectFormat }],
		});
	});
	it("check when taxInfo is in correct format ", () => {
		//[10 symbols digits or letters A,B or D]-[2 letters]
		expect(validateTaxInfo("1234A678Bd-rl", country)).toEqual({
			error: false,
			messages: [],
		});
	});
});
describe("validate taxInfo for other Countries", () => {
	for (let index = 0; index < predefinedCountries.length; index++) {
		let country;
		country = predefinedCountries[index].name.toLowerCase();
		if (country === "united states of america" || country === "canada") {
			continue;
		}
		console.log("country", country);
		it("check when taxInfo is empty for country:" + country, () => {
			expect(validateTaxInfo(" ", country)).toEqual({
				error: true,
				messages: [
					{ text: validationMessages.emptyTaxInfo },
					{ text: validationMessages[country].enterInCorrectFormat },
				],
			});
		});
		it(
			"check when taxInfo is in incorrect format for country:" + country,
			() => {
				expect(validateTaxInfo("abc-123", country)).toEqual({
					error: true,
					messages: [
						{ text: validationMessages[country].enterInCorrectFormat },
					],
				});
			}
		);
		it("check when taxInfo is in correct format for country:" + country, () => {
			expect(validateTaxInfo("12345", country)).toEqual({
				error: false,
				messages: [],
			});
		});
	}
});
