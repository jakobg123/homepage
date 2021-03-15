import { useState } from 'react';
import DropDown from '../DropDown';
import styles from './Tab.module.scss';
import Icon from '../Icon';
import classNames from 'classnames';

const Tab = ({ type, number, html, title, dark, id, onClick }) => {
    console.log("OUTPUT ÄR ~ file: Tab.tsx ~ line 8 ~ Tab ~ id", id)
    const [isExpanded, setIsExpanded] = useState(false);

    // console.log("OUTPUT ÄR ~ file: Tab.tsx ~ line 8 ~ Tab ~ type", type)
    const handleOnClick = () => {
        // console.log("klickad");
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={classNames(styles['Tab'],
            { [styles['Tab--Dark']]: dark })} >
            <button
                className={classNames(styles['Tab__Button'],
                    // { [styles['Tab--Dark']]: dark }
                )}
                // role="button"
                // onClick={handleOnClick}
                onClick={() => onClick(id)}
            >
                <span className="sr-only">Läs om mina erfarenheter med {type}</span>
            </button>
            <div className={styles['Tab__IconWrapper']}>
                <Icon type={type} color={"Primary"} modifier={[styles["Tab__Height"]]} />
            </div>
            <div className={styles['Tab__TextAndDropDownWrapper']}>
                <div className={styles['Tab__TextWrapper']}>
                    <h3 className={styles['Tab__Title']}>{title}</h3>
                    <p className={styles['Tab__Knowledge']}>
                        <strong className={classNames(styles['Tab__Knowledge--Strong'], { [styles["Tab__Knowledge--Strong--Dark"]]: dark })}>{number}</strong> /10</p>
                </div>
                {!!html && (
                    <span className={styles['Tab__DropDownWrapper']}>
                        <DropDown
                            html={html}
                            dark={dark}
                            onClick={handleOnClick}
                            isExpanded={isExpanded}
                        />
                    </span>
                )}
            </div>

        </div>
    );
};

export default Tab;
