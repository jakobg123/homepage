import { MouseEvent } from "react";
import Icon from '../Icon';
import styles from './DropDown.module.scss';
import classNames from 'classnames';

interface IDropDownProps {
    html: string;
    dark: boolean;
    // onClick: MouseEvent;
    isExpanded: boolean;
    zIndex: number;
    type: string;
}

const DropDown: React.FC<IDropDownProps> = ({ html, dark, isExpanded, zIndex, type }) => {
    return (
        <div
            className={classNames(
                styles['DropDown'],
                {
                    [styles['DropDown--Dark']]: dark,
                }
            )}>
            <span
                className={styles['DropDown__Button']}>
                <strong className={styles['DropDown__ButtonText']}>Läs mer</strong>
                <span
                    className={classNames(styles['DropDown__IconWrapper'], {
                        [styles['DropDown__IconWrapper--Expanded']]: isExpanded,
                    })}>
                    <Icon type="chevronDown" color={dark ? "Primary" : "Black"} />
                </span>
            </span>
            <div
                id={`info-about-${type}`}
                aria-hidden={isExpanded ? false : true}
                style={{ zIndex: zIndex }}
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
