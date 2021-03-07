import { useState } from 'react'
import DropDown from "../DropDown";
import styles from "./Tab.module.scss";
import Icon from "../Icon";
import classNames from "classnames";

const Tab = ({ type, number, html, title, dark }) => {
    return (
        <div className={classNames(styles["Tab"], { [styles["Tab--Dark"]]: dark })}>
            <div className={styles["Tab__IconWrapper"]}>
                <Icon type={type} />
            </div>

            <div className={styles["Tab__TextAndDropDownWrapper"]}>
                <div className={styles["Tab__TextWrapper"]}>
                    <h3 className={styles["Tab__Title"]}>{title}</h3>
                    <strong className={styles["Tab__Knowledge"]}>Nivå: {number}</strong>
                </div>
                {!!html &&
                    <DropDown html={html} dark={dark} />
                }
            </div>
        </div>
    )
}

export default Tab
