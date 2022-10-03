import styles from "./TaxInfo.module.scss";
import InputFieldErrorMsg from "../InputFieldErrorMsg";
import countrySpecificTaxInfoMask from "../../utils/inputmask/countrySpecificTaxInfoMask";

export default function TaxInfo({
	dispatch,
	isUpdating,
	clientSideValidationMsgs,
	fieldName,
	fieldValue,
	labelName,
	country,
}) {
	let countryspecificTaxInfoMask = countrySpecificTaxInfoMask?.[country];
	return (
		<>
			<label className={`${styles.form_input_label}`} htmlFor={fieldName}>
				{labelName}
			</label>
			<input
				data-cy={fieldName}
				disabled={isUpdating}
				className={`${styles.form_input_el}`}
				id={fieldName}
				type="text"
				value={fieldValue}
				onChange={(e) => {
					// debugger;

					let maskedOutput;
					if (countryspecificTaxInfoMask) {
						console.log(`mask country -- ${country}`);
						maskedOutput = countryspecificTaxInfoMask.autoFormat(
							e.currentTarget.value,
							fieldValue
						);
						console.log(`masked output ${maskedOutput}`);
					} else {
						maskedOutput = e.currentTarget.value;
						console.log(`unmasked output -- ${maskedOutput}`);
					}
					dispatch({
						type: "field",
						fieldName: fieldName,
						payload: maskedOutput,
					});
				}}
			/>
			<InputFieldErrorMsg
				fieldName={fieldName}
				clientSideValidationMsgs={clientSideValidationMsgs}
			></InputFieldErrorMsg>
		</>
	);
}
