import Link from "next/link";
import styles from "./Button.module.scss";
import Icon from "../Icon";

const Button = ({ label, icon, href, onClick = null }) => {

    let ButtonThing = null;

    if (!href) {
        ButtonThing = ({ children }) => (
            <button className={styles["Button"]} onClick={onClick}>{label}{children}</button>
        )
    }
    else if ("http" === href.substring(0, 4)) {
        ButtonThing = ({ children }) => (
            <a href={href} className={styles["Button"]} >{label}{children}</a>
        )
    }
    else {
        ButtonThing = ({ children }) => (
            <Link href={href}>
                <a className={styles["Button"]}>{label}{children}</a>
            </Link>
        )
    }

    const IconWrapper = ({ icon }) => (
        <span aria-hidden="true" className={styles["Button__IconWrapper"]}>
            <Icon type={icon} color={"Black"} hoverEffect />
        </span>
    )

    return (
        <ButtonThing>
            {!!icon && <IconWrapper icon={icon} />}
        </ButtonThing>
    )
}

export default Button
