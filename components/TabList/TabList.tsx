import { useState, useEffect, useRef } from "react";

import Tab from "../Tab";
import styles from "./TabList.module.scss";
import classNames from "classnames";
import Icon from "../Icon";

const InfoContainer = ({ info }) => {

    const [show, setShow] = useState(false)
    useEffect(() => {
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
                <h5 className={styles["TabList__InfoTitle"]}>{title}</h5>
                <div className={classNames(styles["TabList__InfoText"], { [styles["TabList__InfoText--Show"]]: show })} dangerouslySetInnerHTML={{ __html: html }}></div>
            </>
        ))
    )
}

const TabList = ({ knowledge, title, dark = false }) => {

    const [currentKnowledge, setCurrentKnowledge] = useState([]);

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
        <div className={classNames(styles["TabList"], { [styles["TabList--Dark"]]: dark })}>
            <div className={classNames(styles["TabList__CardsContainer"], { [styles["TabList__CardsContainer--Dark"]]: dark })}>
                <h4 className={styles["TabList__Title"]}>{title}</h4>
                <ul className={styles["TabList__List"]}>
                    {!!knowledge.length && knowledge.map((item, index) => (
                        <li key={index} className={styles["TabList__ListItem"]}>
                            <Tab {...item} dark={dark} onClick={handleClick} key={index} />
                        </li>
                    ))}
                </ul>
            </div>
            <div className={classNames(styles["TabList__InfoContainer"], { [styles["TabList__InfoContainer--Dark"]]: dark })}>
                {!!currentKnowledge.length ? (
                    <InfoContainer info={currentKnowledge} key={currentKnowledge[0].id} />
                )
                    :
                    <div className={classNames(styles["TabList__InfoStartWrapper"], { [styles["TabList__InfoStartWrapper--Dark"]]: dark })} >
                        <p aria-hidden="true" className={styles["TabList__InfoStartText"]} > Klicka på den teknologi du vill veta mer om.</p>
                        <div aria-hidden="true" className={styles["TabList__InfoStartIconWrapper"]}>
                            {dark ? <Icon type={"arrowNext"} color={"Primary"} /> : <Icon type={"arrowPrev"} color={"Black"} />}

                        </div>
                    </div>
                }
                {/* {!!currentKnowledge.length && (
                    <InfoContainer info={currentKnowledge} key={currentKnowledge[0].id} />
                )
                } */}
            </div>
        </div >
    )
}

export default TabList;
