import styles from "./MainNav.module.scss";

import Link from "next/link";

const MainNav = () => {
    return (
        <nav className={styles['MainNav']}>
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
            </ul>
        </nav>
    )
}

export default MainNav;