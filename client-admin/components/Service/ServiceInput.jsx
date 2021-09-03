import styles from "./ServiceInput.module.css";

export default function ServiceInput({ type, input, handleInput, handleShowInput, handleSubmit, placeholderName, placeholderDesc }) {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <label htmlFor={`${type}Name`} className={styles.inputLabel}>
          {type} Name
        </label>
        <div className={styles.inputSubContainer}>
          <input className={styles.input} type="text" placeholder={`eg: ${placeholderName}`} id={`${type}Name`} value={input[`${type}Name`] || ""} onChange={handleInput} />
        </div>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor={`${type}Description`} className={styles.inputLabel}>
          {type} Description
        </label>
        <div className={styles.inputSubContainer}>
          <textarea className={styles.input} type="text" placeholder={`eg: ${placeholderDesc}`} id={`${type}Description`} value={input[`${type}Description`] || ""} onChange={handleInput}></textarea>
        </div>
      </div>
      <div className="flex">
        <button id={type} className={styles.btnCancel} onClick={handleShowInput}>
          Cancel
        </button>
        <button className={styles.btnSave} onClick={handleSubmit}>
          Save {type}
        </button>
      </div>
    </div>
  );
}
