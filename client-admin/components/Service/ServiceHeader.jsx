import styles from "./ServiceHeader.module.css";

export default function ServiceHeader({ type, data, title, btnName, showInput, handleShowInput }) {
  return (
    <div className={styles.container}>
      <div className="flex items-center">
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.badge}>{data.length} Data Found</p>
      </div>
      {showInput !== type && (
        <button id={type} className={styles.btn} onClick={({ currentTarget }) => handleShowInput(currentTarget.id)}>
          <span className={styles.btnText}>{btnName}</span>
          <i className="fas fa-plus"></i>
        </button>
      )}
    </div>
  );
}
