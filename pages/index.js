// import Head from "next/head";
import ErrorIcon from "/public/icons/error.svg";

import styles from "/pages/index.module.scss";

export default function Home() {
	const onFormsubmit = () => {
		console.log(`test_val`);
	};
	return (
		<div className={`${styles.cont}`}>
			<h1 className={`${styles.h1}`}>Enter Your Tax Information</h1>

			<form
				onSubmit={onFormsubmit}
				className={`${styles.form}`}
				action="/api/tax-info"
			>
				<div className={`${styles.form_input_cont}`}>
					<label className={`${styles.form_input_label}`} htmlFor="username">
						Username
					</label>
					<input
						className={`${styles.form_input_el}`}
						id="username"
						type="text"
					/>
					<div className={`${styles.form_input_info} ${styles.error}`}>
						<ErrorIcon className={`${styles.icon}`}></ErrorIcon>
						<div>
							<div className={`${styles.info_txt}`}>Error message 1</div>
							<div className={`${styles.info_txt}`}>Error message 2</div>
						</div>
					</div>
				</div>

				<div className={`${styles.form_input_cont}`}>
					<label className={`${styles.form_input_label}`} htmlFor="country">
						Country
					</label>
					<input
						className={`${styles.form_input_el}`}
						id="country"
						type="text"
					/>
				</div>

				<div className={`${styles.form_input_cont}`}>
					<label
						className={`${styles.form_input_label}`}
						htmlFor="tax_identifier_no"
					>
						Tax Identifier No
					</label>
					<input
						className={`${styles.form_input_el}`}
						id="tax_identifier_no"
						type="text"
					/>
				</div>

				<div className={`${styles.button_cont}`}>
					<button type="button" className={`${styles.button}`}>
						Submit Your Tax Info
					</button>
				</div>
			</form>
		</div>
	);
}
