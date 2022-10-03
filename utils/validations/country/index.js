import validationMessages from "../../../dummyData/validationMessages/country.json";
import predefinedCountries from "../../../dummyData/countries.json";
export default function validateCountry(country) {
	//no error
	let validationResult = {
		error: false,
		messages: [],
	};

	country = country.toLowerCase();
	if (!country?.trim()) {
		/*START: check it is not empty*/
		validationResult.error = true;
		validationResult.messages.push({
			text: validationMessages.noListedCountrySelected,
		});
		/*END: check it is not empty*/
	} else {
		/*START: check country is there on the predefined list*/
		let countryIsNotThereOnPreDefinedList = true;
		for (let index = 0; index < predefinedCountries.length; index++) {
			const countryFromList = predefinedCountries[index].name.toLowerCase();
			if (countryFromList === country) {
				countryIsNotThereOnPreDefinedList = false;
				break;
			}
		}
		if (countryIsNotThereOnPreDefinedList) {
			validationResult.error = true;
			validationResult.messages.push({
				text: validationMessages.noListedCountrySelected,
			});
		}
		/*END: check country is there on the predefined list*/
	}

	return validationResult;
}
