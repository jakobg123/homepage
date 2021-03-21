import { useState } from 'react';
import Icon from '../Icon';
import styles from './DropDown.module.scss';
import classNames from 'classnames';

const DropDown = ({ html, dark, onClick, isExpanded }) => {
    // const [isExpanded, setIsExpanded] = useState(false);

    // const handleOnClick = () => {
    //     setIsExpanded(!isExpanded);
    // };

    return (
        <div
            className={classNames(
                styles['DropDown'],
                {
                    [styles['DropDown--Expanded']]: isExpanded,
                },
                {
                    [styles['DropDown--Dark']]: dark,
                }
            )}>
            <span
                className={classNames(styles['DropDown__Button'], {
                    [styles['DropDown__Button--Expanded']]: isExpanded,
                })}
            // onClick={onClick}
            >
                <strong className={styles['DropDown__ButtonText']}>Läs mer</strong>
                <span
                    className={classNames(styles['DropDown__IconWrapper'], {
                        [styles['DropDown__IconWrapper--Expanded']]: isExpanded,
                    })}>
                    <Icon type="chevronDown" color={dark ? "Primary" : "Black"} />
                </span>
            </span>
            <div
                className={classNames(styles['DropDown__Text'], {
                    [styles['DropDown__Text--Expanded']]: isExpanded,
                })}>
                <div
                    className={classNames(styles['DropDown__Content'], {
                        [styles['DropDown__Content--Expanded']]: isExpanded,
                    })}
                    dangerouslySetInnerHTML={{ __html: html }}></div>
            </div>
        </div>
    );
};

export default DropDown;
