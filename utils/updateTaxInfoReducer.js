/*START: reducer which takes action object with type and decide based on the type, usefull for form and involves more states interconnected and thinking from user perspective*/
export default function updateTaxInfoReducer(state, action) {
	switch (action.type) {
		case "field": {
			let isSuccessfullyUpdated = state.isSuccessfullyUpdated;
			if (action.payload.trim()) {
				isSuccessfullyUpdated = "";
			}
			return {
				...state,
				isSuccessfullyUpdated,
				[action.fieldName]: action.payload.trim(),
			};
		}
		case "updateInProgress": {
			return {
				...state,
				isUpdating: true,
				serverError: "",
				clientSideValidationMsgs: action.payload.clientSideValidationMsgs,
			};
		}
		case "updateSuccess": {
			return {
				...state,
				isSuccessfullyUpdated: true,
				isUpdating: false,
				username: "",
				country: "",
				taxInfo: "",
			};
		}
		case "serverSideerror": {
			return {
				...state,
				serverError: "unable to update your tax information!",
				isSuccessfullyUpdated: false,
				isUpdating: false,
			};
		}
		case "clientSideError": {
			return {
				...state,
				serverError: "",
				isSuccessfullyUpdated: false,
				isUpdating: false,
				clientSideValidationMsgs: action.payload,
			};
		}

		default:
			return state;
	}
}
/*END: reducer which takes action object with type and decide based on the type, usefull for form and involves more states interconnected and thinking from user perspective*/
