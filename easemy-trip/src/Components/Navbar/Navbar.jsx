import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [login, toggleLogin] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <nav className={styles.navbarWrapper}>
        <div className={styles.navbarContent}>
          {/* 1st part of navbar .ie. left side of navbar */}
          <div className={styles.leftSideNavbar}>
            {/* logo wrapper */}
            <div className={styles.logoWrapper}>
              <Link to="/" className={styles.logoimg}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7OJBtyg40cYXaD9uhpbM0WqMSCdjJvwrsiQ&usqp=CAU"
                  alt="Logo"
                />
              </Link>
            </div>
            {/* hamberger menu */}
            <div
              className={styles.hamburgr_menu}
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <CloseIcon style={{ fontSize: "1.4em" }} />
              ) : (
                <MenuIcon style={{ fontSize: "1.4em" }} />
              )}
            </div>
          </div>

          {/* 2nd part of navbar will start which contains logo and login */}

          <div
            className={
              open ? styles.rightSideNavbarMobile : styles.rightSideNavbar
            }
          >
            {/* icons container */}
            <div className={styles.iconWrapper}>
              <div onClick={() => navigate("/flight")}>
                <p>
                  Flights &nbsp; <span className={styles.line}>|</span>
                </p>
              </div>
              <div onClick={() => navigate("/hotel")}>
                <p>
                  Hotels &nbsp; <span className={styles.line}>|</span>
                </p>
              </div>
              <div>
                <p>
                  Trains &nbsp; <span className={styles.line}>|</span>
                </p>
              </div>
              <div>
                <p>
                  Buses &nbsp; <span className={styles.line}>|</span>
                </p>
              </div>
              <div>
                <p>
                  Holiday &nbsp; <span className={styles.line}>|</span>
                </p>
              </div>
              <div>
                <p>
                  Cabs &nbsp; <span className={styles.line}>|</span>
                </p>
              </div>

              <div>
                <p>More</p>
              </div>
            </div>

            {/* login container */}
            <div className={styles.loginContainer}>
              {login ? (
                <button onClick={() => toggleLogin(!login)}>Logout</button>
              ) : (
                <button onClick={() => toggleLogin(!login)}>Login</button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
