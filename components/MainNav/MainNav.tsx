import styles from "./MainNav.module.scss";
import Link from "next/link";

const MainNav = () => {
    const links = [
        { target: "#technology", label: "Teknologier" },
        { target: "#internship", label: "Praktik" },
        { target: "#contact", label: "Kontakt" }
    ];

    return (
        <nav className={styles['MainNav']}>
            <figure className={styles['MainNav__Logo']} >
                <img src="/logoPrimary.svg" alt="Jakob Gauffin, sidans logotyp" width="200px" height="40px" />
            </figure>
            <ul className={styles['MainNav__List']}>
                {!!links.length && (
                    links.map(({ target, label }, index) => (
                        <li className={styles['MainNav__ListItem']} key={index}>
                            <Link href={target}>
                                <a className={styles['MainNav__Link']} >{label}</a>
                            </Link>
                        </li>
                    ))
                )}
            </ul>
        </nav>
    )
}

export default MainNav;