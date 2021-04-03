import Link from "next/link";
import styles from "./Button.module.scss";
import Icon from "../Icon";
import React from "react";
import {IIconProps} from "../../types/types";

interface IButtonProps {
    label: string;
    icon?: IIconProps['type'];
    href?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({ label, icon, href, onClick = null, children }) => {
    console.log("🚀 ~ file: Button.tsx ~ line 15 ~ icon", !!icon)

    let ButtonThing: React.FC;

    if (!href) {
        ButtonThing = () => (
            <button className={styles["Button"]} onClick={onClick}>{label}{children}</button>
        )
    }
    else if ("http" === href.substring(0, 4)) {
        ButtonThing = () => (
            <a href={href} className={styles["Button"]} >{label}{!!icon && <IconWrapper icon={icon} />}</a>
        )
    }
    else {
        ButtonThing = () => (
            <Link href={href}>
                <a className={styles["Button"]}>{label}<>{children}</></a>
            </Link>
        )
    }

    const IconWrapper: React.FC<{icon: IIconProps["type"]}> = ({icon}) => {
        console.log("körs");
        return (
            <span aria-hidden="true" className={styles["Button__IconWrapper"]}>
                <Icon type={icon} color={"Black"} hoverEffect />
            </span>
        )
    }

    return (
        <ButtonThing>
            {/* <span style={{border: "1px solid red"}}>
                <IconWrapper icon={icon} />
            </span> */}
        </ButtonThing>
    )
}

export default Button
