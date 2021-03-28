import { useState, useEffect } from 'react';
import styles from './MobileNav.module.scss';
import classNames from 'classnames';
import dynamic from 'next/dynamic';
const MobileNavMenu = dynamic(() => import('../MobileNavMenu'));

const MobileNav = ({ data }) => {
    const [openNav, setOpenNav] = useState(false);
    const [navInit, setNavInit] = useState(false);

    useEffect(() => {
        if (navInit) {
            return;
        }

        if (openNav) {
            setNavInit(true);
        }
    }, [openNav])

    const handleMobileNav = () => {
        setOpenNav(!openNav);
    };

    return (
        <div className={styles['MobileNav']}>
            <button
                aria-expanded={openNav ? 'true' : 'false'}
                aria-controls="menu"
                onClick={handleMobileNav}
                className={classNames(styles['MobileNav__Button'], {
                    [styles['MobileNav__Button--Active']]: openNav,
                })}>
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
            {!!navInit && (
                <MobileNavMenu
                    data={data}
                    openNav={openNav}
                    setOpenNav={setOpenNav}
                />
            )}
        </div>
    );
};

export default MobileNav;
