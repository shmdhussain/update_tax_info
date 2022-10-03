import validationMessages from "../../../dummyData/validationMessages/username.json";
export default function validateUsername(username) {
	// const fieldName = "username";
	let validationResult = {
		error: false,
		messages: [],
	};

	/*START: check it is not empty*/
	if (!username?.trim()) {
		validationResult.error = true;
		validationResult.messages.push({
			text: validationMessages.emptyUsername,
		});
	}
	/*END: check it is not empty*/

	/*START: check username is more than 3 chars*/
	const regex = /\w{4,}/i;
	if (!regex.test(username)) {
		validationResult.error = true;
		validationResult.messages.push({
			text: validationMessages.lessThanThreeChars,
		});
	}
	/*END: check username is more than 3 chars*/

	return validationResult;
}
