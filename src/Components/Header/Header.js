import React from "react";
import styles from "./Header.module.css";

const Header = () => (
    <header>
        <ul className={styles.navList}>
            <li>
                <a href="/">Movies</a>
            </li>
            <li>
                <a href="/tv">TV</a>
            </li>
            <li>
                <a href="/Search">Search</a>
            </li>
        </ul>
    </header>
)
export default Header;