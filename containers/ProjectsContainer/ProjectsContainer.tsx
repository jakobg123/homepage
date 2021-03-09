import React, { useState } from 'react'
import styles from "./ProjectsContainer.module.scss";
import classNames from "classnames";

const ProjectsContainer = () => {
    const [openNav, setOpenNav] = useState(false);

    const handleMobileNav = () => {
        setOpenNav(!openNav);
        // openNav
        //     ? (document.body.style.overflow = 'scroll')
        //     : (document.body.style.overflow = 'hidden');
    };
    return (
        <div className={classNames(styles["ProjectsContainer"], { [styles["ProjectsContainer--Active"]]: openNav })}>
            <div className={classNames(styles["ProjectsContainer__Relative"], { [styles["ProjectsContainer__Relative--Active"]]: openNav })}>

                <div className={classNames(styles["ProjectsContainer__Absolute"], { [styles["ProjectsContainer__Absolute--Active"]]: openNav })}>

                    <div className={classNames(styles["ProjectsContainer__Fixed"], { [styles["ProjectsContainer__Fixed--Active"]]: openNav })}>


                    </div>

                </div>

            </div>
            <button onClick={handleMobileNav}>klick</button>

        </div>
    )
}

export default ProjectsContainer
