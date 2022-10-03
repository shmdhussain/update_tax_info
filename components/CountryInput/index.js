import styles from "./CountryInput.module.scss";
import InputFieldErrorMsg from "..//InputFieldErrorMsg";
import predefinedCountriesList from "../../dummyData/countries.json";
import { useState, useRef } from "react";
export default function CountryInput({
	dispatch,
	isUpdating,
	clientSideValidationMsgs,
	fieldName,
	fieldValue,
	labelName,
}) {
	const [countryAutoList, setCountryAutoList] = useState(false);
	let countriesList = predefinedCountriesList;

	/*START: filtered country list from the text entered in the text box*/
	if (fieldValue) {
		countriesList = predefinedCountriesList.filter((country) => {
			let offset = country.name.toLowerCase().indexOf(fieldValue.toLowerCase());
			if (offset === 0) {
				return true;
			}
		});
	}
	/*END: filtered country list from the text entered in the text box*/

	return (
		<>
			<label className={`${styles.form_input_label}`} htmlFor={fieldName}>
				{labelName}
			</label>
			<input
				disabled={isUpdating}
				className={`${styles.form_input_el}`}
				id={fieldName}
				type="text"
				value={fieldValue}
				onFocus={(e) => {
					setCountryAutoList(true);
				}}
				onChange={(e) => {
					dispatch({
						type: "field",
						fieldName: fieldName,
						payload: e.currentTarget.value,
					});
				}}
			/>
			<div
				tab-index="-1"
				className={`${styles.auto_list} ${
					countryAutoList ? `${styles.show_auto_list}` : ""
				}`}
			>
				{countriesList.length > 0 ? (
					countriesList.map((country) => {
						return (
							<button
								key={country.name}
								type="button"
								onClick={() => {
									dispatch({
										type: "field",
										fieldName: fieldName,
										payload: country.name,
									});

									setCountryAutoList(false);
								}}
								onFocus={() => {
									setCountryAutoList(true);
								}}
								className={`${styles.auto_list_item_btn} `}
							>
								{country.name}
							</button>
						);
					})
				) : (
					<div className={`${styles.auto_list_item_no_results}`}>
						no results for your search
					</div>
				)}
			</div>
			<InputFieldErrorMsg
				clientSideValidationMsgs={clientSideValidationMsgs}
			></InputFieldErrorMsg>
		</>
	);
}
