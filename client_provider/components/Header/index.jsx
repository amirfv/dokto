import styles from "./Header.module.css";
import { useHeader } from "./useHeader";

export default function Header({ admin }) {
  const { setToggle, toggle, pageName, handleLogout } = useHeader();

  return (
    <header className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.subContainer2}>
          <div className={styles.brandContainer}>
            <h3 className={styles.brandText}>{pageName}</h3>
          </div>
          <div className={styles.mainProfileContainer}>
            <span className={styles.mainProfileSubContainer}>
              <div className={styles.profileContainer}>
                <div>
                  <button
                    type="button"
                    className={styles.profileToggleBtn}
                    id="menu-button"
                    onClick={() => setToggle(!toggle)}
                  >
                    <span className="mr-3">
                      {admin?.firstName} {admin?.lastName}
                    </span>
                    <i className="far fa-user-circle fa-lg"></i>
                  </button>
                </div>

                <div
                  className={`${toggle ? "block" : "hidden"} ${
                    styles.profileMenu
                  }`}
                  role="menu"
                  tabIndex="-1"
                >
                  <div className="py-1">
                    <a href="#" className={styles.profileMenuItem}>
                      Account settings
                    </a>
                    <button
                      className={styles.profileMenuItem}
                      onClick={handleLogout}
                    >
                      Log out
                    </button>
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
