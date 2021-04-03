import { useState, useEffect } from 'react';
import styles from "./MobileNavMenu.module.scss";
import classNames from "classnames";
import Link from 'next/link';
// import dynamic from "next/dynamic";
import Icon from "../Icon";
// const Icon = dynamic(() => import("../Icon"));

const MobileNavMenu = ({ data, openNav, setOpenNav }) => {

    const [showOverlay, setShowOverlay] = useState(false);
    const [growMenu, setGrowMenu] = useState(false)
    const [drop, setDrop] = useState(false);

    useEffect(() => {
        openNav ? open() : close();

        return () => { };
    }, [openNav])

    const open = () => {
        setShowOverlay(true);

        setTimeout(() => {
            setGrowMenu(true);
            slideIn(true);
            document.body.style.overflow = 'hidden';
        }, 100);
    };

    const close = (closeMenuFromLink = false) => {
        setGrowMenu(false);
        slideIn(false);
        document.body.style.overflow = 'scroll';

        if (closeMenuFromLink) {
            setOpenNav(false);
        }

        setTimeout(() => {
            setShowOverlay(false);
        }, 500);

    };

    const handleMobileNav = () => {
        openNav ? close(true) : open();
    };

    const slideIn = (bool) => {
        setTimeout(() => {
            setDrop(bool);
        }, 300);
        return;
    };


    return (
        <div
            id="menu"
            aria-hidden={openNav ? 'false' : 'true'}
            className={classNames(styles['MobileNavMenu__Menu'],
                {
                    [styles['MobileNavMenu__Menu--Active']]: growMenu,
                    [styles['MobileNavMenu__Menu--Hide']]: !showOverlay,
                })}>
            <nav className={styles['MobileNavMenu__Nav']}>
                <h2
                    className={classNames(styles['MobileNavMenu__NavListTitle'])}>
                    <div className={styles['MobileNavMenu__MenuIconWrapper']}>
                        <Icon type="menu" color="Black" />
                    </div>
                    <span
                        className={classNames(styles['MobileNavMenu__NavListTitleText'])}>
                        Meny
                        </span>
                </h2>
                <ul className={styles['MobileNavMenu__NavList']}>
                    {!!data.length && data.map(({ link, url }, index) => (
                        <li
                            key={index}
                            className={classNames(styles['MobileNavMenu__NavListItem'], {
                                [styles['MobileNavMenu__NavListItem--Drop']]: !drop,
                            })}
                            onClick={handleMobileNav}
                        >
                            <Link href={url}>
                                <a className={styles['MobileNavMenu__NavLink']}>{link}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default MobileNavMenu
