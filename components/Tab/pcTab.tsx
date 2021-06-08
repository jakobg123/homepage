import { PureComponent } from 'react';
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

class Tab extends PureComponent<ITabProps> {

    state = {
        isExpanded: false,
    }

    handleOnClick = (id: number) => {
        this.setState({ isExpanded: !this.state.isExpanded });
        this.props.onClick(id);
    }

    render() {
        const { type, number, html, title, dark, id } = this.props;

        return (
            <div className={classNames(styles['Tab'], { [styles['Tab--Dark']]: dark })}>
                <button
                    className={styles['Tab__Button']}
                    onClick={() => this.handleOnClick(id)}>
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
                        <div className={styles['Tab__DropDownWrapper']}>
                            {/* <DropDown
                                zIndex={1001 - id}
                                html={html}
                                dark={dark}
                                isExpanded={this.state.isExpanded}
                            /> */}
                        </div>
                    )}
                </div>
            </div>
        );
    }
};

export default Tab;
