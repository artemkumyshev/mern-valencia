import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@redux/actions/users";

import styles from "./Header.module.scss";

const Header = () => {
  const isAuth = useSelector((state) => state.users.isAuth);
  const user = useSelector((state) => state.users.currentUser);

  console.log(user);

  const dispatch = useDispatch();

  return (
    <header className={styles.wrapper}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.item}>
            <NavLink className={styles.logo} to="/">
              <img
                className={styles.logo__image}
                src="https://www.valenciacf.com/assets/images/logo_valencia.svg"
                alt="Logotype."
              />
              <div className={styles.logo__title}>
                <span>Valencia CF</span>
                <span>Ростов-на-Дону</span>
              </div>
            </NavLink>
          </div>
          <div className={styles.item}>
            <ul className={styles.menu}>
              {!isAuth ? (
                <>
                  <li className={styles.menu__item}>
                    <NavLink className={styles.menu__link} to="/login">
                      Войти
                    </NavLink>
                  </li>
                  <li className={styles.menu__item}>
                    <NavLink className={styles.menu__link} to="/registration">
                      Регистрация
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className={styles.menu__item}>
                    <span className={styles.menu__link}>
                      {user.firstName} {user.lastName[0]}.
                    </span>
                  </li>
                  <li className={styles.menu__item}>
                    <span
                      className={styles.menu__link}
                      onClick={() => dispatch(logout())}
                    >
                      Выйти
                    </span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
