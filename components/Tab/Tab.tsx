import { useState } from 'react';
import DropDown from '../DropDown';
import styles from './Tab.module.scss';
import Icon from '../Icon';
import classNames from 'classnames';

const Tab = ({ type, number, html, title, dark, id, onClick }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleOnClick = (id) => {
        // for dropdown in mobileview
        setIsExpanded(!isExpanded);

        // for displaying text in infoview in desktopview
        onClick(id);
    };

    return (
        <div className={classNames(styles['Tab'], { [styles['Tab--Dark']]: dark })}>
            <button
                className={styles['Tab__Button']}
                onClick={() => handleOnClick(id)}>
                <span className="sr-only">Läs om mina erfarenheter med {type}</span>
            </button>
            <span
                className={styles['Tab__Overlay']}></span>
            <div className={styles['Tab__IconWrapper']}>
                <Icon
                    type={type}
                    color={dark ? 'White' : 'Black'}
                    modifier={[styles['Tab__Height']]}
                    hoverEffect
                />
            </div>
            <div className={styles['Tab__TextAndDropDownWrapper']}>
                <div className={styles['Tab__TextWrapper']}>
                    <h3 className={styles['Tab__Title']}>{title}</h3>
                    <p className={styles['Tab__Knowledge']}>
                        <strong
                            className={classNames(styles['Tab__Knowledge--Strong'], {
                                [styles['Tab__Knowledge--Strong--Dark']]: dark,
                            })}>
                            {number}
                        </strong>
                    /10
                    </p>
                </div>
                {!!html && (
                    <span className={styles['Tab__DropDownWrapper']}>
                        <DropDown
                            zIndex={1001 - id}
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
