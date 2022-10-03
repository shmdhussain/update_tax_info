import InputFieldErrorMsg from "../InputFieldErrorMsg";
import styles from "./Input.module.scss";
export default function Input({
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
				data-cy={fieldName}
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
				fieldName={fieldName}
				clientSideValidationMsgs={clientSideValidationMsgs}
			></InputFieldErrorMsg>
		</>
	);
}
