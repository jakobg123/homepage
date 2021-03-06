import React, { useState, useEffect, PureComponent, createRef, useRef } from 'react';

import Tab from '../Tab';
import styles from './TabList.module.scss';
import classNames from 'classnames';
import Icon from '../Icon';
import { IKnowledge } from "../../types/typesData";



interface IInfoContainerProps {
    info: IKnowledge[];
}

const InfoContainer: React.FC<IInfoContainerProps> = ({ info }) => {
    const [show, setShow] = useState(false);
    
    

    useEffect(() => {
        if (show) {
            setShow(false);
            return;
        }
        setTimeout(() => {
            setShow(true);
        }, 100);
        return () => setShow(false);
    }, [info]);

    return (
        <>
            {info.map(({ title, html, id }) => (
                <div key={id}>
                    <h5 className={styles['TabList__InfoTitle']}>{title}</h5>
                    <div
                        className={classNames(styles['TabList__InfoText'], {
                            [styles['TabList__InfoText--Show']]: show,
                        })}
                        dangerouslySetInnerHTML={{ __html: html }}></div>
                </div>
            ))}
        </>
    )
};

interface ITabListProps {
    knowledge: IKnowledge[];
    title: string;
    dark?: boolean;
}

interface ITabListState {
    currentKnowledge: IKnowledge[];
}

const TabList: React.FC<ITabListProps> = ({title, dark = false, knowledge}) => {
    const [currentKnowledge, setCurrentKnowledge] = useState([]);
    const prevId = useRef<number>();
    
    // console.log("🚀 ~ file: TabList.tsx ~ line 17 ~ windowSize", windowSize)
    // private prevId: React.MutableRefObject<number>;

    // constructor(props: ITabListProps) {
    //     super(props);
    //     this.prevId = createRef();
    //     this.state = {
    //         currentKnowledge: [],
    //     }
    // }

    const handleClick = ((id: number) => {

        if (prevId.current === id) {
            return;
        }
        const info = knowledge.filter((x: { id: number }) => x.id === id);
        setCurrentKnowledge( info );
        prevId.current = id;
        // if (this.prevId.current === id) {
        //     return;
        // }
        // const info = this.props.knowledge.filter((x: { id: number }) => x.id === id);
        // this.setState({ currentKnowledge: info });
        // this.prevId.current = id;
    })

    // render() {
        // const { title, dark = false } = this.props;

        return (
            <div
                className={classNames(styles['TabList'], {
                    [styles['TabList--Dark']]: dark,
                })}>
                <div
                    className={classNames(styles['TabList__CardsContainer'], {
                        [styles['TabList__CardsContainer--Dark']]: dark,
                    })}>
                    <h4 className={styles['TabList__Title']}>{title}</h4>
                    <ul className={styles['TabList__List']}>
                        {!!knowledge.length &&
                            knowledge.map((item, index) => (
                                <li key={index} className={styles['TabList__ListItem']} style={{ zIndex: 1001 - item.id }}>
                                    <Tab {...item} dark={dark} onClick={handleClick} key={index} />
                                </li>
                            ))}
                    </ul>
                </div>
                <div
                    className={classNames(styles['TabList__InfoContainer'], {
                        [styles['TabList__InfoContainer--Dark']]: dark,
                    })}>
                    {!!currentKnowledge.length ? (
                        <InfoContainer info={currentKnowledge} key={currentKnowledge[0].id} />
                    ) : (
                        <div
                            className={classNames(styles['TabList__InfoStartWrapper'], {
                                [styles['TabList__InfoStartWrapper--Dark']]: dark,
                            })}>
                            <p aria-hidden="true" className={styles['TabList__InfoStartText']}>
                                {' '}
                                Klicka på den teknologi du vill veta mer om.
                            </p>
                            <div
                                aria-hidden="true"
                                className={styles['TabList__InfoStartIconWrapper']}>
                                {dark ? (
                                    <Icon type={'arrowNext'} color={'Primary'} />
                                ) : (
                                    <Icon type={'arrowPrev'} color={'Black'} />
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    // }

};
// class TabList extends PureComponent<ITabListProps, ITabListState> {
//     private prevId: React.MutableRefObject<number>;

//     constructor(props: ITabListProps) {
//         super(props);
//         this.prevId = createRef();
//         this.state = {
//             currentKnowledge: [],
//         }
//     }

//     handleClick = ((id: number) => {

//         if (this.prevId.current === id) {
//             return;
//         }
//         const info = this.props.knowledge.filter((x: { id: number }) => x.id === id);
//         this.setState({ currentKnowledge: info });
//         this.prevId.current = id;
//     })

//     render() {
//         const { title, dark = false } = this.props;

//         return (
//             <div
//                 className={classNames(styles['TabList'], {
//                     [styles['TabList--Dark']]: dark,
//                 })}>
//                 <div
//                     className={classNames(styles['TabList__CardsContainer'], {
//                         [styles['TabList__CardsContainer--Dark']]: dark,
//                     })}>
//                     <h4 className={styles['TabList__Title']}>{title}</h4>
//                     <ul className={styles['TabList__List']}>
//                         {!!this.props.knowledge.length &&
//                             this.props.knowledge.map((item, index) => (
//                                 <li key={index} className={styles['TabList__ListItem']} style={{ zIndex: 1001 - item.id }}>
//                                     <Tab {...item} dark={dark} onClick={this.handleClick} key={index} />
//                                 </li>
//                             ))}
//                     </ul>
//                 </div>
//                 <div
//                     className={classNames(styles['TabList__InfoContainer'], {
//                         [styles['TabList__InfoContainer--Dark']]: dark,
//                     })}>
//                     {!!this.state.currentKnowledge.length ? (
//                         <InfoContainer info={this.state.currentKnowledge} key={this.state.currentKnowledge[0].id} />
//                     ) : (
//                         <div
//                             className={classNames(styles['TabList__InfoStartWrapper'], {
//                                 [styles['TabList__InfoStartWrapper--Dark']]: dark,
//                             })}>
//                             <p aria-hidden="true" className={styles['TabList__InfoStartText']}>
//                                 {' '}
//                                 Klicka på den teknologi du vill veta mer om.
//                             </p>
//                             <div
//                                 aria-hidden="true"
//                                 className={styles['TabList__InfoStartIconWrapper']}>
//                                 {dark ? (
//                                     <Icon type={'arrowNext'} color={'Primary'} />
//                                 ) : (
//                                     <Icon type={'arrowPrev'} color={'Black'} />
//                                 )}
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         );
//     }

// };

export default TabList;
