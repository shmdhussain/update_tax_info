let validationCountrySpecificObj = {
	"united states of america": {
		validate: function (taxInfoNumber) {
			//[4 digits]-[3 letters]-[5 or 7 digits]
			const regex = /^(\d{4})-([a-zA-Z]{3})-((\d{5})|(\d{7}))$/i;
			return regex.test(taxInfoNumber);
		},
	},
	canada: {
		validate: function (taxInfoNumber) {
			//[10 symbols digits or letters A,B or D]-[2 letters]
			const regex = /^([0-9ABDabd]{10})-([a-zA-Z]{2})$/i;
			return regex.test(taxInfoNumber);
		},
	},
	india: {
		validate: function (taxInfoNumber) {
			const regex = /^([0-9]{10})$/i;
			return regex.test(taxInfoNumber);
		},
	},
	"united arab emirates": {
		validate: function (taxInfoNumber) {
			const regex = /^([0-9]{10})$/i;
			return regex.test(taxInfoNumber);
		},
	},
	ukraine: {
		validate: function (taxInfoNumber) {
			const regex = /^([0-9]{10})$/i;
			return regex.test(taxInfoNumber);
		},
	},
	pakistan: {
		validate: function (taxInfoNumber) {
			const regex = /^([0-9]{10})$/i;
			return regex.test(taxInfoNumber);
		},
	},
	"united kingdom": {
		validate: function (taxInfoNumber) {
			const regex = /^([0-9]{10})$/i;
			return regex.test(taxInfoNumber);
		},
	},
	china: {
		validate: function (taxInfoNumber) {
			const regex = /^([0-9]{10})$/i;
			return regex.test(taxInfoNumber);
		},
	},
	egypt: {
		validate: function (taxInfoNumber) {
			const regex = /^([0-9]{10})$/i;
			return regex.test(taxInfoNumber);
		},
	},
	france: {
		validate: function (taxInfoNumber) {
			const regex = /^([0-9]{10})$/i;
			return regex.test(taxInfoNumber);
		},
	},
	spain: {
		validate: function (taxInfoNumber) {
			const regex = /^([0-9]{10})$/i;
			return regex.test(taxInfoNumber);
		},
	},
	portugal: {
		validate: function (taxInfoNumber) {
			const regex = /^([0-9]{10})$/i;
			return regex.test(taxInfoNumber);
		},
	},
	brazil: {
		validate: function (taxInfoNumber) {
			const regex = /^([0-9]{10})$/i;
			return regex.test(taxInfoNumber);
		},
	},
	argentina: {
		validate: function (taxInfoNumber) {
			const regex = /^([0-9]{10})$/i;
			return regex.test(taxInfoNumber);
		},
	},
	nigeria: {
		validate: function (taxInfoNumber) {
			const regex = /^([0-9]{10})$/i;
			return regex.test(taxInfoNumber);
		},
	},
	poland: {
		validate: function (taxInfoNumber) {
			const regex = /^([0-9]{10})$/i;
			return regex.test(taxInfoNumber);
		},
	},
};
export default validationCountrySpecificObj;
