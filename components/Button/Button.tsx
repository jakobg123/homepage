import React from 'react'
import Link from "next/link";
import styles from "./Button.module.scss";
import Icon from "../Icon";

const Button = ({ label, icon, href, onClick }) => {
    icon = "arrowNext";

    href = "/";

    let ButtonThing = null;

    if (!href) {
        ButtonThing = () => (
            <button className={styles["Button__Style"]} onClick={onClick}>{label}</button>
        )
    }
    else if ("http" === href.substring(0, 4)) {
        ButtonThing = () => (
            <div>
                <a href={href} className={styles["Button__Link"]} target="_blank">{label}</a>
                <span className={styles["Button__Style"]}>{label}</span>
            </div>
        )
    }
    else {
        ButtonThing = () => (
            <>
                <Link href={href}>
                    <a className={styles["Button__Link"]}>{label}</a>
                </Link>
                <span className={styles["Button__Style"]}>{label}</span>
            </>
        )
    }

    const IconWrapper = ({ icon }) => (
        <div className={styles["Button__IconWrapper"]}>
            <Icon type={icon} color={"Primary"} />
        </div>
    )

    return (
        <>
            <div className={styles["Button"]}>
                <ButtonThing />
                {!!icon && <IconWrapper icon={icon} />}

            </div>
        </>
    )
}

export default Button
