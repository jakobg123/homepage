import styles from "./MainNav.module.scss";
import Link from "next/link";

import { INavLinks, ILogoData } from "../../types/typesData";

export interface IMainNavProps{
    links: INavLinks[];
    logo: ILogoData;
}

const MainNav: React.FC<IMainNavProps> = ({links, logo}) => {

    return (
        <nav className={styles['MainNav']}>
            <figure className={styles['MainNav__Logo']} >
                <img {...logo} />
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
