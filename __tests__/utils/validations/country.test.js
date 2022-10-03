import validateCountry from "../../../utils/validations/country/index.js";
import validationMessages from "../../../dummyData/validationMessages/country.json";
import predefinedCountries from "../../../dummyData/countries.json";
describe("validate country selected", () => {
	it("check when  country is empty ", () => {
		expect(validateCountry(" ")).toEqual({
			error: true,
			messages: [{ text: validationMessages.noListedCountrySelected }],
		});
	});
	it("check when country selected is not in the predefined list ", () => {
		expect(validateCountry("autosria")).toEqual({
			error: true,
			messages: [{ text: validationMessages.noListedCountrySelected }],
		});
	});
	it("check when country selected is  in the predefined list ", () => {
		expect(validateCountry(predefinedCountries[0].name)).toEqual({
			error: false,
			messages: [],
		});
	});
});
