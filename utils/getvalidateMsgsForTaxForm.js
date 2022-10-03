import validateUsername from "./validations/username";
import validateCountry from "./validations/country";
import validateTaxInfo from "./validations/taxInfo";
export default function getvalidateMsgsForTaxForm(username, country, taxInfo) {
	let validationMsgForUserName = validateUsername(username);
	let validationMsgForCountry = validateCountry(country);
	let validationMsgForTaxInfo = validateTaxInfo(taxInfo, country);
	return {
		username: validationMsgForUserName,
		country: validationMsgForCountry,
		taxInfo: validationMsgForTaxInfo,
	};
}
