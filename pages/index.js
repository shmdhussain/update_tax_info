import Head from "next/head";
import ErrorIcon from "/public/icons/error.svg";

import styles from "/pages/index.module.scss";
import { useReducer } from "react";
import ButtonLoader from "/components/ButtonLoader";
import Input from "../components/Input";
import CountryInput from "../components/CountryInput";
import TaxInfo from "../components/TaxInfo";
import getvalidateMsgsForTaxForm from "../utils/getvalidateMsgsForTaxForm.js";
import updateTaxInfo from "../utils/updateTaxInfo";
import updateTaxInfoReducer from "../utils/updateTaxInfoReducer";

/*START: initial states for the client side error msgs and initial state value for the forms*/

const initialClientSideValidationMsgs = {
	username: {
		error: false,
		messages: [],
	},
	country: {
		error: false,
		messages: [],
	},
	taxInfo: {
		error: false,
		messages: [],
	},
};
const initialState = {
	username: "",
	country: "",
	taxInfo: "",
	isUpdating: false,
	serverError: "",
	isSuccessfullyUpdated: false,
	clientSideValidationMsgs: initialClientSideValidationMsgs,
};

/*END: initial states for the client side error msgs and initial state value for the forms*/

export default function Home() {
	const [state, dispatch] = useReducer(updateTaxInfoReducer, initialState);
	const {
		username,
		country,
		taxInfo,
		isUpdating,
		serverError,
		isSuccessfullyUpdated,
		clientSideValidationMsgs,
	} = state;

	/*START: form submit handler*/

	async function onFormsubmit(e) {
		e.preventDefault();

		//validate ,if all ok proceed to update action else fill the validation error and then return
		let newClientValidateMsgs = getvalidateMsgsForTaxForm(
			username,
			country,
			taxInfo
		);

		/*START: check validation in form if error there*/

		let errorInForm = false;
		for (const validationMsgItemKey in newClientValidateMsgs) {
			if (
				Object.hasOwnProperty.call(newClientValidateMsgs, validationMsgItemKey)
			) {
				const validationMsgItem = newClientValidateMsgs[validationMsgItemKey];
				if (validationMsgItem.error) {
					errorInForm = true;
					break;
				}
			}
		}
		/*END: check validation in form if error there*/
		if (errorInForm) {
			dispatch({
				type: "clientSideError",
				payload: newClientValidateMsgs,
			});
		} else {
			dispatch({
				type: "updateInProgress",
				payload: {
					clientSideValidationMsgs: initialClientSideValidationMsgs,
				},
			});
			try {
				await updateTaxInfo(username, country, taxInfo);
				dispatch({
					type: "updateSuccess",
				});
			} catch (error) {
				dispatch({
					type: "serverSideerror",
				});
			}
		}
	}
	/*END: form submit handler*/
	return (
		<>
			<Head>
				<title>Enter Tax Info</title>
			</Head>
			<div className={`${styles.cont}`}>
				<h1 className={`${styles.h1}`}>Enter Your Tax Information</h1>

				<form
					autoComplete="off"
					onSubmit={onFormsubmit}
					className={`${styles.form}`}
					action="/api/tax-info"
				>
					<div className={`${styles.form_input_cont}`}>
						{serverError ? (
							<div data-cy="error_msg" className={`${styles.server_error_msg}`}>
								<ErrorIcon
									className={`${styles.server_error_msg_icon}`}
								></ErrorIcon>
								{serverError}
							</div>
						) : null}

						{isSuccessfullyUpdated ? (
							<div
								data-cy="success_msg"
								className={`${styles.server_success_msg}`}
							>
								Your Tax Info is successfully updated
							</div>
						) : null}

						<Input
							isUpdating={isUpdating}
							clientSideValidationMsgs={clientSideValidationMsgs["username"]}
							fieldName={"username"}
							labelName={"Username"}
							fieldValue={username}
							dispatch={dispatch}
						></Input>
					</div>

					<div className={`${styles.form_input_cont}`}>
						<CountryInput
							isUpdating={isUpdating}
							clientSideValidationMsgs={clientSideValidationMsgs["country"]}
							fieldName={"country"}
							labelName={"Country"}
							fieldValue={country}
							dispatch={dispatch}
						></CountryInput>
					</div>

					<div className={`${styles.form_input_cont}`}>
						<TaxInfo
							isUpdating={isUpdating}
							clientSideValidationMsgs={clientSideValidationMsgs["taxInfo"]}
							fieldName={"taxInfo"}
							labelName={"Tax Identifier No"}
							fieldValue={taxInfo}
							dispatch={dispatch}
							country={country.toLowerCase()}
						></TaxInfo>
					</div>

					<div className={`${styles.button_cont}`}>
						<button
							data-cy="submit_tax_info"
							disabled={isUpdating}
							type="submit"
							className={`${styles.button}`}
						>
							{isUpdating ? <ButtonLoader></ButtonLoader> : null}Submit Your Tax
							Info
						</button>
					</div>
				</form>
			</div>
		</>
	);
}
