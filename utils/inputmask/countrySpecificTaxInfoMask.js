let countrySpecificTaxInfoMask = {
	"united states of america": {
		autoFormat: function (input, prevVal) {
			//[4 digits]-[3 letters]-[5 or 7 digits]
			// 1234-eee-1234599
			// 1234-eee-12345
			// input = "1234eee1234";
			if (prevVal.length > input.length) {
				//delete happen, chek if deleted value is "-" then remove prev char to del
				let addedChar = prevVal.substr(prevVal.length - 1);
				if (addedChar === "-") {
					input = input.substr(0, input.length - 1);
				}
			}
			let unmaskedInput = input.replace(/-/gi, "");
			let maskedOutput = unmaskedInput;
			let matches = unmaskedInput.match(
				/^(\d{4})([a-zA-Z]{3})?((\d{7})|(\d{5}))?/i
			);
			let remainingPart;
			if (matches?.[1] && matches?.[2] && matches?.[3]) {
				let lengthOfMatchedPart = `${matches[1]}${matches[2]}${matches[3]}`
					.length;
				remainingPart = unmaskedInput.substr(lengthOfMatchedPart);

				maskedOutput = `${matches[1]}-${matches[2]}-${matches[3]}${remainingPart}`;
			} else if (matches?.[1] && matches?.[2]) {
				let lengthOfMatchedPart = `${matches[1]}${matches[2]}`.length;
				remainingPart = unmaskedInput.substr(lengthOfMatchedPart);
				maskedOutput = `${matches[1]}-${matches[2]}-${remainingPart}`;
				// if (remainingPart) {
				// } else {
				// 	maskedOutput = `${matches[1]}-${matches[2]}`;
				// }
				maskedOutput = `${matches[1]}-${matches[2]}-${remainingPart}`;
			} else if (matches?.[1]) {
				let lengthOfMatchedPart = `${matches[1]}`.length;
				remainingPart = unmaskedInput.substr(lengthOfMatchedPart);
				maskedOutput = `${matches[1]}-${remainingPart}`;
			}
			return maskedOutput;
		},
	},
	canada: {
		autoFormat: function (input, prevVal) {
			//[10 symbols digits or letters A,B or D]-[2 letters]
			// 12345abd12-ww,
			// input = "1234eee1234";
			if (prevVal.length > input.length) {
				//delete happen, chek if deleted value is "-" then remove prev char to del
				let addedChar = prevVal.substr(prevVal.length - 1);
				if (addedChar === "-") {
					input = input.substr(0, input.length - 1);
				}
			}
			let unmaskedInput = input.replace(/-/gi, "");
			let maskedOutput = unmaskedInput;
			const regex = /^([0-9ABDabd]{10})([a-zA-Z]{2})?/i;
			let matches = unmaskedInput.match(regex);
			let remainingPart;
			if (matches?.[1] && matches?.[2]) {
				let lengthOfMatchedPart = `${matches[1]}${matches[2]}`.length;
				remainingPart = unmaskedInput.substr(lengthOfMatchedPart);

				maskedOutput = `${matches[1]}-${matches[2]}${remainingPart}`;
			} else if (matches?.[1]) {
				let lengthOfMatchedPart = `${matches[1]}`.length;
				remainingPart = unmaskedInput.substr(lengthOfMatchedPart);
				maskedOutput = `${matches[1]}-${remainingPart}`;
			}
			return maskedOutput;
		},
	},
	india: {
		autoFormat: function (input) {
			return input;
		},
	},
	"united arab emirates": {
		autoFormat: function (input) {
			return input;
		},
	},
	ukraine: {
		autoFormat: function (input) {
			return input;
		},
	},
	pakistan: {
		autoFormat: function (input) {
			return input;
		},
	},
	"united kingdom": {
		autoFormat: function (input) {
			return input;
		},
	},
	china: {
		autoFormat: function (input) {
			return input;
		},
	},
	egypt: {
		autoFormat: function (input) {
			return input;
		},
	},
	france: {
		autoFormat: function (input) {
			return input;
		},
	},
	spain: {
		autoFormat: function (input) {
			return input;
		},
	},
	portugal: {
		autoFormat: function (input) {
			return input;
		},
	},
	brazil: {
		autoFormat: function (input) {
			return input;
		},
	},
	argentina: {
		autoFormat: function (input) {
			return input;
		},
	},
	nigeria: {
		autoFormat: function (input) {
			return input;
		},
	},
	poland: {
		autoFormat: function (input) {
			return input;
		},
	},
};
export default countrySpecificTaxInfoMask;
