import Tab from "../Tab";
import styles from "./TabList.module.scss";
import classNames from "classnames";

const TabList = ({ knowledge, title, dark = false }) => {
    return (
        <div className={classNames(styles["TabList"], { [styles["TabList--Dark"]]: dark })}>
            <h3 className={styles["TabList__Title"]}>{title}</h3>
            <ul className={styles["TabList__List"]}>
                {!!knowledge.length && knowledge.map((item, index) => (
                    <li key={index} className={styles["TabList__ListItem"]}>
                        <Tab {...item} dark={dark} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TabList;
