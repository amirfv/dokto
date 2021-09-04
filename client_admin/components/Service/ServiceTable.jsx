import usePagination from "../../hooks/usePagination";
import styles from "./ServiceTable.module.css";

export default function ServiceTable({ type, data, handleEdit, handleRemove }) {
  const { pages, currentPage, setCurrentPage, getPaginatedData, getPaginationGroup, goToNextPage, goToPreviousPage, changePage } = usePagination(data, 1, 5);

  console.log(currentPage, pages);
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
              <th className={`w-1/5 ${styles.theadName}`}>Name</th>
              <th className={`w-3/5 ${styles.theadName}`}>Description</th>
              <th className={`w-1/5 ${styles.theadName}`}>Action</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {getPaginatedData().map((d) => (
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

      {data.length > 4 && (
        <div className={styles.paginationContainer}>
          <div className={styles.paginationSubContainer}>
            <p className="ml-auto mr-2 text-xs text-gray-500">{pages} Pages Found</p>
            <button onClick={goToPreviousPage} disabled={currentPage === 1} className={`${currentPage === 1 && styles.disabled} ${styles.pagination}`}>
              prev
            </button>
            {getPaginationGroup().map((item, index) => (
              <button key={index} onClick={changePage} className={`${styles.pagination} ${currentPage === item && styles.current}`}>
                <span>{item}</span>
              </button>
            ))}
            <button onClick={goToNextPage} disabled={currentPage === pages} className={`${currentPage === pages && styles.disabled} ${styles.pagination}`}>
              next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// className={`prev ${currentPage === 1 ? "disabled" : ""}`}
