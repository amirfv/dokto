import Link from "next/link";
import { useRouter } from "next/router";
import { routes } from "../../utils/routes";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const { pathname } = useRouter();

  const renderPageLinks = routes.map((route) => {
    if (!route.showOnSide) return null;
    const active = pathname === route.path && styles.active;

    return (
      <Link key={route.path} href={route.path}>
        <a className={`${styles.linkContainer} ${active}`}>
          <span className={styles.linkIconContainer}>{route.icon}</span>
          <span className={styles.linkName}>{route.name}</span>
        </a>
      </Link>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.brandContainer}>
          <h1 className={styles.brandText}>dokto.</h1>
        </div>
        <nav className={styles.nav}>
          <div>{renderPageLinks}</div>
        </nav>
      </div>
    </div>
  );
}
