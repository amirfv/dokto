import styles from "./ServiceTable.module.css";

export default function ServiceTable({ type }) {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={`w-1/4 ${styles.theadName}`}>{type} Name</th>
            <th className={`w-1/2 ${styles.theadName}`}>Description</th>
            <th className={`w-1/5 ${styles.theadName}`}>Action</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          <tr>
            <td className={styles.tbodyValue}>Medical Checkup</td>
            <td className={styles.tbodyValue}>Basic medical checkup to check the health condition of a single person.</td>
            <td className={styles.tbodyValue}>
              <div className={styles.actionBtnContainer}>
                <button className={styles.actionBtnEdit}>
                  <i className="fas fa-pencil-alt"></i>
                </button>
                <button className={styles.actionBtnRemove}>
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td className={styles.tbodyValue}>Medical Checkup</td>
            <td className={styles.tbodyValue}>Basic medical checkup to check the health condition of a single person.</td>
            <td className={styles.tbodyValue}>
              <div className={styles.actionBtnContainer}>
                <button className={styles.actionBtnEdit}>
                  <i className="fas fa-pencil-alt"></i>
                </button>
                <button className={styles.actionBtnRemove}>
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td className={styles.tbodyValue}>Medical Checkup</td>
            <td className={styles.tbodyValue}>Basic medical checkup to check the health condition of a single person.</td>
            <td className={styles.tbodyValue}>
              <div className={styles.actionBtnContainer}>
                <button className={styles.actionBtnEdit}>
                  <i className="fas fa-pencil-alt"></i>
                </button>
                <button className={styles.actionBtnRemove}>
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
