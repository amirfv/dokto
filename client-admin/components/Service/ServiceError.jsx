import styles from "./ServiceError.module.css";

export default function ServiceError({ error }) {
  return (
    <div className={styles.container}>
      <p className={styles.errorText}>{error}</p>
    </div>
  );
}
