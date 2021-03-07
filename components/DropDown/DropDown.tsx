import { useState } from 'react';
import Icon from '../Icon';
import styles from './DropDown.module.scss';
import classNames from 'classnames';

const DropDown = ({ html, dark }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleOnClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={classNames(styles['DropDown'], {
            [styles['DropDown--Expanded']]: isExpanded,
        }, {
            [styles['DropDown--Dark']]: dark,
        })}>
            <button className={classNames(styles['DropDown__Button'], { [styles["DropDown__Button--Expanded"]]: isExpanded })} onClick={handleOnClick}>
                <strong className={styles['DropDown__ButtonText']}>Läs mer</strong>
                <span className={classNames(styles['DropDown__IconWrapper'], {
                    [styles['DropDown__IconWrapper--Expanded']]: isExpanded,
                })}>
                    <Icon type="chevronDown" color="Blue" />
                </span>
            </button>
            <article
                className={classNames(styles['DropDown__Preamble'], {
                    [styles['DropDown__Preamble--Expanded']]: isExpanded,
                })}>
                <div
                    className={classNames(styles['DropDown__Content'], {
                        [styles['DropDown__Content--Expanded']]: isExpanded,
                    })}
                    dangerouslySetInnerHTML={{ __html: html }}></div>
            </article>
        </div>
    );
};

export default DropDown;
