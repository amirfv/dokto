import styles from "./ServiceTable.module.css";

export default function ServiceTable({ type, data, handleEdit, handleRemove }) {
  return (
    <div className={styles.container}>
      {data.length === 0 && (
        <div className="w-full text-center">
          <h5 className="py-8 text-2xl">No data found...</h5>
        </div>
      )}
      {data.length !== 0 && (
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th className={`w-1/5 ${styles.theadName}`}>{type} Name</th>
              <th className={`w-3/5 ${styles.theadName}`}>Description</th>
              <th className={`w-1/5 ${styles.theadName}`}>Action</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {data.map((d) => (
              <tr key={d._id}>
                <td className={styles.tbodyValue}>{d.name}</td>
                <td className={styles.tbodyValue}>{d.description}</td>
                <td className={styles.tbodyValue}>
                  <div className={styles.actionBtnContainer}>
                    <button className={styles.actionBtnEdit} onClick={() => handleEdit(type, d._id)}>
                      <i className="fas fa-pencil-alt"></i>
                    </button>
                    <button className={styles.actionBtnRemove} onClick={() => handleRemove(type, d._id)}>
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
