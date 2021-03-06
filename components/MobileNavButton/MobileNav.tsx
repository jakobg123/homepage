import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

import styles from './MobileNav.module.scss';

import classNames from 'classnames';
import Icon from '../Icon';
import { fileURLToPath } from 'node:url';

const MobileNav = () => {
    const [openNav, setOpenNav] = useState(false);

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: .9,
    });

    useEffect(() => {
        console.log("OUTPUT ÄR ~ file: MobileNav.tsx ~ line 15 ~ MobileNav ~ inView", inView)
        // console.log("OUTPUT ÄR ~ file: MobileNav.tsx ~ line 15 ~ MobileNav ~ entry", entry)

        let entryBool = Boolean(entry)
        console.log("OUTPUT ÄR ~ file: MobileNav.tsx ~ line 24 ~ useEffect ~ entryBool", entryBool)
    }, [inView])



    const handleMobileNav = () => {
        setOpenNav(!openNav);
        openNav
            ? (document.body.style.overflow = 'scroll')
            : (document.body.style.overflow = 'hidden');
    };

    const [drop, setDrop] = useState(false);
    // const [sticky, setSticky] = useState(false)
    // console.log("OUTPUT ÄR ~ file: MobileNav.tsx ~ line 28 ~ MobileNav ~ sticky", sticky)

    const slideIn = (bool) => {
        setTimeout(() => {
            setDrop(bool);
        }, 300);
        return;
    };

    useEffect(() => {
        openNav ? slideIn(true) : slideIn(false);
    }, [openNav]);

    // useEffect(() => {
    //     // console.log(
    //     //     'OUTPUT ÄR ~ file: MobileNav.tsx ~ line 46 ~ MobileNav ~ inView',
    //     //     inView
    //     // );
    //     setSticky(!inView)
    // }, [inView]);

    // useEffect(() => {
    //     setDrop(false)
    // }, [])

    return (
        <div className={styles['MobileNav']}>
            {/* <div className={styles['MobileNav__ButtonWrapper']}> */}
            <button
                ref={ref}
                aria-expanded={openNav ? 'true' : 'false'}
                aria-controls="menu"
                onClick={handleMobileNav}
                className={classNames(
                    styles['MobileNav__Button'],
                    { [styles['MobileNav__Button--Active']]: openNav },
                    // { [styles['MobileNav__Button--Sticky']]: !inView }
                )}>
                <div className="sr-only">Open menu</div>
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
            {/* </div> */}
            <div
                id="menu"
                aria-hidden={openNav ? 'false' : 'true'}
                className={classNames(styles['MobileNav__Menu'], {
                    [styles['MobileNav__Menu--Active']]: openNav,
                })}>
                <nav className={styles['MobileNav__Nav']}>
                    <ul className={styles['MobileNav__NavList']}>
                        <li
                            className={classNames(styles['MobileNav__NavListTitle'], {
                                [styles['MobileNav__NavListTitle--Drop']]: !drop,
                            })}>
                            <div className={styles['MobileNav__MenuIconWrapper']}>
                                <Icon type="menu" color="Yellow" />
                            </div>
                            <span
                                className={classNames(styles['MobileNav__NavListTitleText'])}>
                                Meny
              </span>
                            {/* <Link href="/projects"><a className={styles["MobileNav__NavLink"]}></a></Link> */}
                        </li>
                        <li
                            className={classNames(styles['MobileNav__NavListItem'], {
                                [styles['MobileNav__NavListItem--Drop']]: !drop,
                            })}>
                            <Link href="/projects">
                                <a className={styles['MobileNav__NavLink']}>Om sidan</a>
                            </Link>
                        </li>
                        <li
                            className={classNames(styles['MobileNav__NavListItem'], {
                                [styles['MobileNav__NavListItem--Drop']]: !drop,
                            })}>
                            <Link href="">
                                <a className={styles['MobileNav__NavLink']}>CV</a>
                            </Link>
                        </li>
                        <li
                            className={classNames(styles['MobileNav__NavListItem'], {
                                [styles['MobileNav__NavListItem--Drop']]: !drop,
                            })}>
                            <Link href="">
                                <a className={styles['MobileNav__NavLink']}>Om mig</a>
                            </Link>
                        </li>
                        <li
                            className={classNames(styles['MobileNav__NavListItem'], {
                                [styles['MobileNav__NavListItem--Drop']]: !drop,
                            })}>
                            <Link href="">
                                <a className={styles['MobileNav__NavLink']}>Kontakt</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default MobileNav;
