import Link from "next/link";
import styles from "./Button.module.scss";
import Icon from "../Icon";
import React from "react";
import { IIconProps } from "../../types/types";
import classNames from "classnames";

const IconWrapper: React.FC<{ icon: IIconProps["type"] }> = ({ icon }) => {
    return (
        <span aria-hidden="true" className={styles["Button__IconWrapper"]}>
            <Icon type={icon} color={"Primary"} hoverEffect />
        </span>
    )
}

interface IButtonProps {
    label: string;
    icon?: IIconProps['type'];
    href?: string;
    onClick?: () => void;
    children?: React.ReactNode;
    type?: "Primary" | "Secondary"
}

const Button: React.FC<IButtonProps> = ({ label, icon, href, onClick = null, children, type = "Primary" }) => {

    let ButtonThing: React.FC;

    if (!href) {
        ButtonThing = () => (
            <button type="button" className={classNames(styles["Button"], {[styles["Button--Secondary"]]: type === "Secondary"})} onClick={onClick}><span className={styles["Button__TextWrapper"]}>
                {label}{children}
            </span></button>
        )
    }
    else if ("http" === href.substring(0, 4)) {
        ButtonThing = ({ children }) => (
            <a href={href} className={classNames(styles["Button"], {[styles["Button--Secondary"]]: type === "Secondary"})} ><span className={styles["Button__TextWrapper"]}>
                {label}{children}
            </span></a>
        )
    }
    else {
        ButtonThing = () => (
            <Link href={href}>
                <a className={classNames(styles["Button"], {[styles["Button--Secondary"]]: type === "Secondary"})}><span className={styles["Button__TextWrapper"]}>
                    {label}<IconWrapper icon={icon} />
                </span></a>
            </Link>
        )
    }

    return (
        <ButtonThing>
            {!!icon && <IconWrapper icon={icon} />}
        </ButtonThing>
    )
}

export default Button
