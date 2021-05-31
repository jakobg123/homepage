import { memo, useState, useMemo } from 'react';
import DropDown from '../DropDown';
import styles from './Tab.module.scss';
import Icon from '../Icon';
import classNames from 'classnames';

import { IIconProps } from "../../types/types";

interface ITabProps {
    type: IIconProps['type'];
    number: number | string;
    html: string;
    title: string;
    dark: boolean;
    id: number;
    onClick: (id: number) => void;
}

const Tab: React.FC<ITabProps> = ({ type, number, html, title, dark, id, onClick }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const handleOnClick = (id: number) => {
        setIsExpanded(!isExpanded);
        onClick(id);
    }

    const icon = useMemo(() => (
        <Icon type={type}
            color={dark ? 'White' : 'Black'}
            modifier={[styles['Tab__Height']]}
            hoverEffect
        />
    ), [type, dark]);

    return (
        <div className={classNames(styles['Tab'], { [styles['Tab--Dark']]: dark })}>
            <button
                type="button"
                className={styles['Tab__Button']}
                onClick={() => handleOnClick(id)}>
                <span className="sr-only">Läs om mina erfarenheter med {type}</span>
            </button>
            <span
                className={styles['Tab__Overlay']}></span>
            <div className={styles['Tab__IconWrapper']}>
                {icon}
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
                    <div className={styles['Tab__DropDownWrapper']}>
                        <DropDown
                            zIndex={1001 - id}
                            html={html}
                            dark={dark}
                            isExpanded={isExpanded}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default memo(Tab);
