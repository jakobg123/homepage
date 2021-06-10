import React, { PureComponent, useState, useEffect, useContext, memo } from 'react';
import dynamic from "next/dynamic";

import Header from '../../components/Header';
import MobileNav from '../../components/MobileNavButton';
import Footer from '../../components/Footer';
import styles from './BaseContainer.module.scss';

// import StartContainer from '../StartPage';
// const StartContainer = dynamic(() => import('../StartContainer'));
// import ConstructionPage from "../ConstructionPage";
// const ConstructionPage = dynamic(() => import("../ConstructionPage"));

import { IMainNavProps } from "../../components/MainNav/MainNav";
import { IMobileNavProps } from '../../components/MobileNavButton/MobileNav';

import { ILogoData, IKnowledgeData, IStartPageData } from "../../types/typesData";
import { IHeaderProps } from '../../components/Header/Header';
import { IFooter } from "../../components/Footer/Footer";

import { withRouter, NextRouter } from 'next/router'

import { TargetLinksProvider } from "../../utils/TargetLinks.context";
import PageContext from "../../utils/Page.context";
import ModalContext from "../../utils/context/Modal.context";
import classNames from 'classnames';
import Modal from "../../components/Modal";
import ModalContent from "../../components/ModalContent";

// export interface BaseContainerProps {
//     menuData: IMobileNavProps;
//     knowledgeData?: IKnowledgeData;
//     startData?: IStartContainerData;
//     logoData: ILogoData;
//     footerData: IFooter;
//     headerData: IHeaderProps;
//     mainNavData: IMainNavProps;
// }

// interface WithRouterProps {
//     router: NextRouter
// }

// interface BaseContainerProps extends WithRouterProps {
//     menuData: IMobileNavProps;
//     knowledgeData?: IKnowledgeData;
//     startData?: IStartPageData;
//     logoData: ILogoData;
//     footerData: IFooter;
//     headerData: IHeaderProps;
//     mainNavData: IMainNavProps;
//     constructionPageData: any;
//     page: "Start" | "Construction";
// };
interface BaseContainerProps {
    menuData: IMobileNavProps;
    knowledgeData?: IKnowledgeData;
    startData?: IStartPageData;
    logoData: ILogoData;
    footerData: IFooter;
    headerData: IHeaderProps;
    mainNavData: IMainNavProps;
    constructionPageData: any;
    page: "Start" | "Construction";
    children?: React.ReactNode;
};

interface BaseContainerState {
    modalOpen: boolean;
    fadeOutElement: boolean;
    hideElement: boolean;
    toggleModalOpen: (bool: boolean) => void;
    passContentToModal: (content: any) => void;
    modalContent: any[];

}

const BaseContainer: React.FC<BaseContainerProps> = ({
    menuData, knowledgeData, startData, logoData, footerData, headerData, mainNavData, constructionPageData, page, children }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [toggleModalOpen, setToggleModalOpen] = useState(false);
    const [fadeOutElement, setFadeOutElement] = useState(false);
    const [hideElement, setHideElement] = useState(false);
    const [modalContent, setModalContent] = useState({ image: null, text: "", title: "" });

    const modalState = { modalOpen, setModalOpen, toggleModalOpen, setToggleModalOpen, fadeOutElement, setFadeOutElement, hideElement, setHideElement, modalContent, setModalContent };

    useEffect(() => {
        if (Object.values(modalContent).some(x => x !== null && x !== '')) {
            setModalOpen(true);
        }

        return () => {
            setModalOpen(false);
        }
    }, [modalContent])

    return (
        <div className={styles['BaseContainer']} id="start">
            <ModalContext.Provider value={modalState}>
                <header className={styles['BaseContainer__Header']}>
                    <figure className={classNames(styles['BaseContainer__Logo'],
                        { [styles["BaseContainer__Logo--Construction"]]: page === "Construction" })}>
                        <img
                            {...logoData}
                        />
                    </figure>
                    <Header {...headerData} mainNavData={mainNavData} />
                    <div className={styles['BaseContainer__StickyContainer']}>
                        <MobileNav {...menuData} />
                    </div>
                </header>
                <main>
                    {children}
                </main>
            </ModalContext.Provider>
            <footer className={styles['BaseContainer__Footer']}>
                <Footer {...footerData} />
            </footer>
            <Modal setOpen={setModalOpen} open={modalOpen}>
                {(!!modalContent.image || !!modalContent.text || !!modalContent.title) && <ModalContent {...modalContent} />}
                {/* {(!!modalContent.image || !!modalContent.text || !!modalContent.title) && <ModalContent image={modalContent.image} />} */}
            </Modal>
        </div>
    )
}

// class BaseContainer extends PureComponent<BaseContainerProps, BaseContainerState> {
//     // toggleModalOpen: (bool: boolean) => void;

//     constructor(props) {
//         super(props);

//         // this.toggleModalOpen = (bool: boolean) => {
//         //     console.log("körs den ens???");
//         //     this.setState(state => ({
//         //         modalOpen: bool
//         //     }));
//         // };

//         this.state = {
//             modalOpen: false,
//             fadeOutElement: false,
//             hideElement: false,
//             modalContent: [],
//             // toggleModalOpen: this.toggleModalOpen,
//             toggleModalOpen: (bool: boolean) => {
//                 console.log("körs den ens???");
//                 this.setState(state => ({
//                     modalOpen: bool
//                 }));


//                 // if (!bool) {
//                 //     this.setState(state => ({
//                 //         fadeOutElement: true
//                 //     }));
//                 //     setTimeout(() => {
//                 //         this.setState(state => ({
//                 //             modalOpen: true
//                 //         }));
//                 //     }, 1000)
//                 // } else {
//                 //     this.setState(state => ({
//                 //         modalOpen: false
//                 //     }));
//                 //     setTimeout(() => {
//                 //         this.setState(state => ({
//                 //             fadeOutElement: false
//                 //         }));
//                 //     }, 4000)
//                 // }
//             },
//             passContentToModal: (content: any) => {
//                 // console.log("innan");
//                 // console.log(this.state.modalOpen);
//                 // this.setState(state => ({
//                 //     modalOpen: true
//                 // }));
//                 // console.log("efter");
//                 // console.log(this.state.modalOpen);
//                 if (content) {
//                     this.setState(state => ({ modalContent: [content] }));
//                 }


//             },

//         };
//     }

//     componentDidUpdate() {
//         if (!!this.state.modalContent.length) {
//             console.log("den är inte tom");
//             this.setState(state => ({
//                 modalOpen: true
//             }));
//         } else {
//             console.log("den är tom");
//         }

//         if (this.state.modalOpen) {
//             this.setState(state => ({
//                 fadeOutElement: true
//             }))
//             setTimeout(() => {
//                 this.setState(state => ({
//                     hideElement: true
//                 }))
//             }, 400)
//         } else {
//             this.setState(state => ({
//                 hideElement: false
//             }))
//             setTimeout(() => {
//                 this.setState(state => ({
//                     fadeOutElement: false
//                 }))
//             }, 100)
//         }
//     }

//     render() {
//         const { menuData, knowledgeData, startData, logoData, footerData, headerData, mainNavData, constructionPageData, page } = this.props;

//         return (
//             <div className={styles['BaseContainer']} id="start">
//                 <ModalContext.Provider value={this.state}>
//                     <header className={styles['BaseContainer__Header']}>
//                         <button onClick={() => this.state.toggleModalOpen(!this.state.modalOpen)}>klicka på mig</button>
//                         <figure className={classNames(styles['BaseContainer__Logo'],
//                             { [styles["BaseContainer__Logo--Construction"]]: page === "Construction" })}>
//                             <img
//                                 {...logoData}
//                             />
//                         </figure>
//                         <Header {...headerData} mainNavData={mainNavData} />
//                         <div className={styles['BaseContainer__StickyContainer']}>
//                             <MobileNav {...menuData} />
//                         </div>
//                     </header>
//                     <main>
//                         {this.props.children}
//                     </main>
//                 </ModalContext.Provider>
//                 <footer className={styles['BaseContainer__Footer']}>
//                     <Footer {...footerData} />
//                 </footer>
//                 <Modal setOpen={this.state.toggleModalOpen} open={this.state.modalOpen}>
//                     {!!this.state.modalContent.length && <ModalContent image={this.state.modalContent[0]} />}
//                 </Modal>
//             </div>
//         );
//     }
// }

// export default withRouter(BaseContainer);
export default memo(BaseContainer);
