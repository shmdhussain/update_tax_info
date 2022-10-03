import countrySpecificTaxInfoMask from "../../../utils/inputmask/countrySpecificTaxInfoMask.js";
import predefinedCountries from "../../../dummyData/countries.json";
describe("countrySpecificTaxInfoMask", () => {
	it("format the tax info for united states of america", () => {
		expect(
			countrySpecificTaxInfoMask["united states of america"].autoFormat(
				"1234-www-1234",
				"1234-www-123"
			)
		).toEqual("1234-www-1234");
	});
});
describe("countrySpecificTaxInfoMask", () => {
	it("format the tax info for  canada", () => {
		expect(
			countrySpecificTaxInfoMask["canada"].autoFormat(
				"1234567abd-uu",
				"1234567abd-u"
			)
		).toEqual("1234567abd-uu");
	});
});
describe("countrySpecificTaxInfoMask", () => {
	for (let index = 0; index < predefinedCountries.length; index++) {
		let country;
		country = predefinedCountries[index].name.toLowerCase();
		if (country === "united states of america" || country === "canada") {
			continue;
		}
		it("format the tax info for country " + country, () => {
			expect(
				countrySpecificTaxInfoMask[country].autoFormat("1234567890")
			).toEqual("1234567890");
		});
	}
});
