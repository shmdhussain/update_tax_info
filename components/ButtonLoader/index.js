import styles from "./ButtonLoader.module.scss";
export default function ButtonLoader() {
	return (
		<svg className={`${styles.ring}`} viewBox="25 25 50 50" strokeWidth="5">
			<circle cx="50" cy="50" r="20" />
		</svg>
	);
}
