import React from "react";
import { Link } from 'react-router-dom';
import styles from './style.module.css';

export const NavBar = () => {
    return (
        <div className={styles.container}>
            {//<Link to="/contacts" className={styles.linkCard}>Contatos</Link>
            }
            <Link to="/useState" className={styles.linkCardReady}>useState</Link>
            <Link to="/useEffect" className={styles.linkCardReady}>useEffect</Link>
            <Link to="/useRef" className={styles.linkCardReady}>useRef</Link>
            <Link to="/useReducer" className={styles.linkCardReady}>useReducer</Link>
            <Link to="/useContext" className={styles.linkCardReady}>useContext</Link>
            <Link to="/useMemo" className={styles.linkCardReady}>useMemo</Link>
            <Link to="/useCallback" className={styles.linkCard}>useCallback</Link>
            <Link to="/useLayoutEffect" className={styles.linkCard}>useLayoutEffect</Link>
        </div>
    )
}