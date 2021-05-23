import { useContext } from "react";
import styles from "./MainNav.module.scss";
import Link from "next/link";

import { INavLinks, ILogoData } from "../../types/typesData";
import TargetLinks from "../../utils/TargetLinks.context";

export interface IMainNavProps {
    links: INavLinks[];
    logo: ILogoData;
}


const MainNav: React.FC<IMainNavProps> = ({ links, logo }) => {

    return (
        <nav className={styles['MainNav']}>
            <figure className={styles['MainNav__Logo']} >
                <img {...logo} />
            </figure>
            <ul className={styles['MainNav__List']}>
                {!!links.length && (
                    links.map((link, index) => (
                        <li className={styles['MainNav__ListItem']} key={index}>
                            {/* <Link href={target}>
                                <a className={styles['MainNav__Link']} onClick={() => forceImportModules()}>{label}</a>
                            </Link> */}
                            {/* <Link href={target}> */}
                            {/* <a className={styles['MainNav__Link']} onClick={() => (!showKnowledge || !showInternship) && redirectAfterImport(target)}>{label}</a> */}
                            {/* </Link> */}
                            {/* <NavLink target={target} label={label} /> */}
                            {/* {(!showKnowledge || !showInternship) &&
                                <a style={{ cursor: "pointer" }} className={styles['MainNav__Link']} onClick={() => redirectAfterImport(target)}>{label}</a>
                            }
                            {(!!showKnowledge || !!showInternship) &&
                                <Link href={target}>
                                    <a className={styles['MainNav__Link']}>{label}</a>
                                </Link>
                            } */}
                            <MainNavLink {...link} />
                        </li>
                    ))
                )}
            </ul>
        </nav >
    )
}

const MainNavLink = ({ target, label, forceImport }) => {
    console.log("OUTPUT ÄR ~ file: MainNav.tsx ~ line 75 ~ MainNavLink ~ forceImport", forceImport);
    const { forceImportModules, showKnowledge, showInternship } = useContext(TargetLinks);

    const redirectAfterImport = (target) => {
        forceImportModules();
        setTimeout(() => {
            window.location.href = target;
        }, 300);
    }

    let NavLink: React.FC;

    if (!forceImport) {
        console.log("inne i !forceimport");
        NavLink = () => (
            <Link href={target}>
                <a className={styles['MainNav__Link']}>{label}</a>
            </Link>
        )
    } else {
        if (!showKnowledge || !showInternship) {
            console.log("inne i !showKnowledge");
            NavLink = () => (
                <button title="http://stackoverflow.com" style={{ cursor: "pointer", background: "none", border: "none" }} className={styles['MainNav__Link']} onClick={() => redirectAfterImport(target)}>{label}</button>
                // <a style={{ cursor: "pointer" }} className={styles['MainNav__Link']} onClick={() => redirectAfterImport(target)}>{label}</a>
            )
        }
        else {
            console.log("inne i else");
            NavLink = () => (
                <Link href={target}>
                    <a title="shankjda" className={styles['MainNav__Link']}>{label}</a>
                </Link>
            )
        }
    }

    return <NavLink />;
}

export default MainNav;
