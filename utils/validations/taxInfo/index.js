import validationMessages from "../../../dummyData/validationMessages/taxInfo.json";
import validationFnsCountrySpecific from "./countrySpecificValidate/index";
import validateCountry from "../country";
export default function validateTaxInfo(taxInfoNumber, country) {
	// const fieldName = "username";
	let validationResult = {
		error: false,
		messages: [],
	};
	// console.log("country", country);
	/*START: check it is not empty*/
	if (!taxInfoNumber?.trim()) {
		validationResult.error = true;
		validationResult.messages.push({
			text: validationMessages.emptyTaxInfo,
		});
	}
	/*START: check validation for the country*/
	const countryInLowercase = country.toLowerCase();
	const countryValidateMsgs = validateCountry(countryInLowercase);
	if (countryValidateMsgs.error) {
		return {
			error: false,
			messages: [],
		};
	}
	if (countryInLowercase) {
		if (
			!validationFnsCountrySpecific?.[countryInLowercase]?.validate(
				taxInfoNumber
			)
		) {
			validationResult.error = true;
			validationResult.messages.push({
				text: validationMessages[countryInLowercase].enterInCorrectFormat,
			});
		}
	}
	/*END: check validation for the country*/
	/*END: check it is not empty*/

	return validationResult;
}
