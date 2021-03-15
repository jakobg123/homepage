import { useState } from "react";

import Tab from "../Tab";
import styles from "./TabList.module.scss";
import classNames from "classnames";

const InfoContainer = ({ info }) => (

    info.map(({ title, html }) => (
        <>
            <h3 className={styles["TabList__InfoTitle"]}>{title}</h3>
            <div className={styles["TabList__InfoText"]} dangerouslySetInnerHTML={{ __html: html }}></div>
        </>
    ))
)

const TabList = ({ knowledge, title, dark = false }) => {

    const [currentKnowledge, setCurrentKnowledge] = useState([]);

    const handleClick = (id) => {
        const info = knowledge.filter(x => x.id === id);
        setCurrentKnowledge(info)
    };


    return (
        <div className={styles["TabList"]}>
            <div className={classNames(styles["TabList__CardsContainer"], { [styles["TabList__CardsContainer--Dark"]]: dark })}>
                <h3 className={styles["TabList__Title"]}>{title}</h3>
                <ul className={styles["TabList__List"]}>
                    {!!knowledge.length && knowledge.map((item, index) => (
                        <li key={index} className={styles["TabList__ListItem"]}>
                            <Tab {...item} dark={dark} onClick={handleClick} />
                        </li>
                    ))}
                </ul>
            </div>
            <div className={classNames(styles["TabList__InfoContainer"], { [styles["TabList__Text--Dark"]]: dark })}>
                {!!currentKnowledge.length && <InfoContainer info={currentKnowledge} />}
            </div>
        </div>
    )
}

export default TabList;
