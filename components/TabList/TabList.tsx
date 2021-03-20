import { useState, useEffect, useRef } from "react";

import Tab from "../Tab";
import styles from "./TabList.module.scss";
import classNames from "classnames";

const InfoContainer = ({ info }) => {
    const [show, setShow] = useState(false)
    useEffect(() => {
        console.log("körs");
        if (show) {
            setShow(false)
            return;
        }
        setTimeout(() => {
            setShow(true);
        }, 100)
        return () => setShow(false);
    }, [info])

    return (
        info.map(({ title, html }) => (
            <>
                <h3 className={styles["TabList__InfoTitle"]}>{title}</h3>
                <div className={classNames(styles["TabList__InfoText"], { [styles["TabList__InfoText--Show"]]: show })} dangerouslySetInnerHTML={{ __html: html }}></div>
            </>
        ))
    )
}

const TabList = ({ knowledge, title, dark = false }) => {

    const [currentKnowledge, setCurrentKnowledge] = useState([]);
    // console.log("OUTPUT ÄR ~ file: TabList.tsx ~ line 34 ~ TabList ~ currentKnowledge", currentKnowledge)

    const prevId = useRef(0);

    const handleClick = (id) => {
        if (prevId.current === id) {
            return;
        }
        const info = knowledge.filter(x => x.id === id);
        setCurrentKnowledge(info)
        prevId.current = id;
    };


    return (
        <div className={styles["TabList"]}>
            <div className={classNames(styles["TabList__CardsContainer"], { [styles["TabList__CardsContainer--Dark"]]: dark })}>
                <h3 className={styles["TabList__Title"]}>{title}</h3>
                <ul className={styles["TabList__List"]}>
                    {!!knowledge.length && knowledge.map((item, index) => (
                        <li key={index} className={styles["TabList__ListItem"]}>
                            <Tab {...item} dark={dark} onClick={handleClick} key={index} />
                        </li>
                    ))}
                </ul>
            </div>
            <div className={classNames(styles["TabList__InfoContainer"], { [styles["TabList__Text--Dark"]]: dark })}>
                {!!currentKnowledge.length && <InfoContainer info={currentKnowledge} key={currentKnowledge[0].id} />}
            </div>
        </div>
    )
}

export default TabList;
