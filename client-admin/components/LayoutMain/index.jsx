import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import styles from "./LayoutMain.module.css";

export default function LayoutMain({ children, admin }) {
  return (
    <main className={styles.container}>
      <div className={styles.subContainer}>
        <Sidebar />
        <div className={styles.contentContainer}>
          <Header admin={admin} />
          <div className={styles.bodyContainer}>
            <div className={styles.bodySubContainer}>{children}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
