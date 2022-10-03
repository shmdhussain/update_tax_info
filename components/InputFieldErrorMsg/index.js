import styles from "./InputFieldErrorMsg.module.scss";
import ErrorIcon from "/public/icons/error.svg";
export default function InputFieldErrorMsg({ clientSideValidationMsgs }) {
	return (
		<>
			{clientSideValidationMsgs.error ? (
				<div className={`${styles.form_input_info} ${styles.error}`}>
					<ErrorIcon className={`${styles.icon}`}></ErrorIcon>
					<div>
						{clientSideValidationMsgs.messages.map((message, index) => {
							console.log(`${message.text}`);
							return (
								<div key={index} className={`${styles.info_txt}`}>
									{message.text}
								</div>
							);
						})}
					</div>
				</div>
			) : null}
		</>
	);
}
