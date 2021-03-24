import { useState } from 'react';
import Link from 'next/link';
import styles from './MobileNav.module.scss';
import classNames from 'classnames';

import Icon from '../Icon';

const MobileNav = ({ data }) => {
    const [openNav, setOpenNav] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false)
    const [drop, setDrop] = useState(false);

    const open = () => {
        setShowOverlay(true)

        setTimeout(() => {
            setOpenNav(true)
            slideIn(true)
            document.body.style.overflow = 'hidden';
        }, 100)
    }

    const close = () => {
        setOpenNav(false)
        slideIn(false)
        document.body.style.overflow = 'scroll';

        setTimeout(() => {
            setShowOverlay(false)
        }, 500)
    }

    const handleMobileNav = () => {
        openNav ? close() : open();
    };

    const slideIn = (bool) => {
        setTimeout(() => {
            setDrop(bool);
        }, 300);
        return;
    };

    return (
        <div className={styles['MobileNav']}>
            <button
                aria-expanded={openNav ? 'true' : 'false'}
                aria-controls="menu"
                onClick={handleMobileNav}
                className={classNames(
                    styles['MobileNav__Button'],
                    { [styles['MobileNav__Button--Active']]: openNav },
                )}>
                <span className="sr-only">{openNav ? 'Stäng meny' : 'Öppna meny'}</span>
                <span
                    className={classNames(
                        styles['MobileNav__Line'],
                        styles['MobileNav__Line--1'],
                        { [styles['MobileNav__Line--Active']]: openNav }
                    )}></span>
                <span
                    className={classNames(
                        styles['MobileNav__Line'],
                        styles['MobileNav__Line--2'],
                        { [styles['MobileNav__Line--Active']]: openNav }
                    )}></span>
                <span
                    className={classNames(
                        styles['MobileNav__Line'],
                        styles['MobileNav__Line--3'],
                        { [styles['MobileNav__Line--Active']]: openNav }
                    )}></span>
            </button>
            <div
                id="menu"
                aria-hidden={openNav ? 'false' : 'true'}
                className={classNames(styles['MobileNav__Menu'],
                    {
                        [styles['MobileNav__Menu--Active']]: openNav,
                        [styles['MobileNav__Menu--Hide']]: !showOverlay,
                    })}>
                <nav className={styles['MobileNav__Nav']}>
                    <h2
                        className={classNames(styles['MobileNav__NavListTitle'])}>
                        <div className={styles['MobileNav__MenuIconWrapper']}>
                            <Icon type="menu" color="Black" />
                        </div>
                        <span
                            className={classNames(styles['MobileNav__NavListTitleText'])}>
                            Meny
                        </span>
                    </h2>
                    <ul className={styles['MobileNav__NavList']}>
                        {!!data.length && data.map(({ link, url }, index) => (
                            <li
                                key={index}
                                className={classNames(styles['MobileNav__NavListItem'], {
                                    [styles['MobileNav__NavListItem--Drop']]: !drop,
                                })}
                                onClick={handleMobileNav}
                            >
                                <Link href={url}>
                                    <a className={styles['MobileNav__NavLink']}>{link}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default MobileNav;
