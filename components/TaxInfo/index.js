import styles from "./TaxInfo.module.scss";
import InputFieldErrorMsg from "../InputFieldErrorMsg";
export default function TaxInfo({
	dispatch,
	isUpdating,
	clientSideValidationMsgs,
	fieldName,
	fieldValue,
	labelName,
}) {
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
				onChange={(e) =>
					dispatch({
						type: "field",
						fieldName: fieldName,
						payload: e.currentTarget.value,
					})
				}
			/>
			<InputFieldErrorMsg
				clientSideValidationMsgs={clientSideValidationMsgs}
			></InputFieldErrorMsg>
		</>
	);
}
