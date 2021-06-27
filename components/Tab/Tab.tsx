import { memo, useState, useMemo, useContext } from 'react';
// import DropDown from '../DropDown';
import styles from './Tab.module.scss';
import Icon from '../Icon';
import classNames from 'classnames';
import ModalContext from "../../utils/context/Modal.context";
import { useInView } from 'react-intersection-observer';

import { IIconProps } from "../../types/types";

interface ITabProps {
    type: IIconProps['type'];
    number: number;
    html: string;
    title: string;
    dark: boolean;
    id: number;
    onClick?: (id: number) => void;
    mobile?: boolean;
    showIcon?: boolean;
}

const Tab: React.FC<ITabProps> = ({ type, number, html, title, dark, id, onClick, mobile = false, showIcon = false }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const { setModalContent } = useContext(ModalContext);
    // const { ref, inView, entry } = useInView({
    //     threshold: 0.05,
    //     triggerOnce: true,
    // });

    const handleOnClick = (id: number, type: IIconProps['type']) => {
        if(mobile){
            setModalContent({title: title, html: html, icon: type});
            return;
        }

        setIsExpanded(!isExpanded);
        onClick && onClick(id);
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
                className={styles['Tab__Button']}
                onClick={() => handleOnClick(id, type)}
                aria-expanded={isExpanded ? true : false}
                aria-controls={`info-about-${type}`}>

                <span className="sr-only">
                    {`Läs om mina erfarenheter med ${type}`}
                </span>

            </button>
            <span
                className={styles['Tab__Overlay']}></span>
            <div className={styles['Tab__IconWrapper']}>
                {(!!mobile && !!showIcon) && icon}
                {!mobile && icon}
            </div>
            <div className={styles['Tab__TextAndDropDownWrapper']}>
                <div className={styles['Tab__TextWrapper']}>
                    <h5 className={styles['Tab__Title']}>{title}</h5>
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
                <div aria-hidden={true} className={styles['Tab__ReadMoreWrapper']}>
                    <div className={classNames(styles['Tab__ReadMoreText'], {[styles['Tab__ReadMoreText--Light']]: dark})}>
                            Läs mer
                    </div>
                    <div className={styles['Tab__ReadMoreIconWrapper']}>
                        <Icon type={"arrowNext"}
                            color={dark ? "SecondaryLight" : "Secondary"}
                        />
                    </div>
                </div>
                {/* {!!html && (
                    <div className={styles['Tab__DropDownWrapper']}>
                        <DropDown
                            zIndex={1001 - id}
                            html={html}
                            dark={dark}
                            isExpanded={isExpanded}
                            type={type}
                        />
                    </div>
                )} */}
            </div>
        </div>
    );
};

export default memo(Tab);
