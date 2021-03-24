import styles from "./MainNav.module.scss";

import Link from "next/link";

const MainNav = () => {
    return (
        <nav className={styles['MainNav']}>
            <figure className={styles['MainNav__Logo']} >
                <img src="/logoPrimary.svg" alt="Jakob Gauffin, sidans logotyp" width="200px" height="40px" />
            </figure>
            <ul className={styles['MainNav__List']}>
                <li className={styles['MainNav__ListItem']}>
                    <Link href="#technology">
                        <a className={styles['MainNav__Link']} >Teknologier</a>
                    </Link>
                </li>
                <li className={styles['MainNav__ListItem']}>
                    <Link href="#internship" >
                        <a className={styles['MainNav__Link']} >Praktik</a>
                    </Link>
                </li>
                <li className={styles['MainNav__ListItem']}>
                    <Link href="#contact" >
                        <a className={styles['MainNav__Link']} >Kontakt</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default MainNav;