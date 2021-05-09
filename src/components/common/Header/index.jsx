import React from "react";
import styles from "./styles.module.css";

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.titleDiv}>
          <h1 className={styles.h1}>GachiAlgo</h1>
        </div>
        <nav className={styles.nav}>
          <a href="/profile">Profile</a>
          <a href="/problemlist">Problems</a>
          <a href="/create">Create</a>
          <a href="/login">Log Out</a>
        </nav>
      </header>
    );
  }
}

export default Header;
