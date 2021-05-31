import React, { PureComponent } from 'react';
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

// export interface BaseContainerProps {
//     menuData: IMobileNavProps;
//     knowledgeData?: IKnowledgeData;
//     startData?: IStartContainerData;
//     logoData: ILogoData;
//     footerData: IFooter;
//     headerData: IHeaderProps;
//     mainNavData: IMainNavProps;
// }

interface WithRouterProps {
    router: NextRouter
}

interface BaseContainerProps extends WithRouterProps {
    menuData: IMobileNavProps;
    knowledgeData?: IKnowledgeData;
    startData?: IStartPageData;
    logoData: ILogoData;
    footerData: IFooter;
    headerData: IHeaderProps;
    mainNavData: IMainNavProps;
    constructionPageData: any;
    page: "Start" | "Construction";
};

interface BaseContainerState {
    modalOpen: boolean;
    fadeOutElement: boolean;
    hideElement: boolean;
    toggleModalOpen: (bool: boolean) => void;
}

class BaseContainer extends PureComponent<BaseContainerProps, BaseContainerState> {
    // toggleModalOpen: (bool: boolean) => void;

    constructor(props) {
        super(props);

        // this.toggleModalOpen = (bool: boolean) => {
        //     console.log("körs den ens???");
        //     this.setState(state => ({
        //         modalOpen: bool
        //     }));
        // };

        this.state = {
            modalOpen: false,
            fadeOutElement: false,
            hideElement: false,
            // toggleModalOpen: this.toggleModalOpen,
            toggleModalOpen: (bool: boolean) => {
                console.log("körs den ens???");
                this.setState(state => ({
                    modalOpen: bool
                }));

                // if (!bool) {
                //     this.setState(state => ({
                //         fadeOutElement: true
                //     }));
                //     setTimeout(() => {
                //         this.setState(state => ({
                //             modalOpen: true
                //         }));
                //     }, 1000)
                // } else {
                //     this.setState(state => ({
                //         modalOpen: false
                //     }));
                //     setTimeout(() => {
                //         this.setState(state => ({
                //             fadeOutElement: false
                //         }));
                //     }, 4000)
                // }
            },

        };
    }

    componentDidUpdate() {
        console.log("nu uppdaterades den");
        if (this.state.modalOpen) {
            this.setState(state => ({
                fadeOutElement: true
            }))
            setTimeout(() => {
                this.setState(state => ({
                    hideElement: true
                }))
            }, 400)
        } else {
            this.setState(state => ({
                hideElement: false
            }))
            setTimeout(() => {
                this.setState(state => ({
                    fadeOutElement: false
                }))
            }, 100)
        }
    }

    render() {
        const { menuData, knowledgeData, startData, logoData, footerData, headerData, mainNavData, constructionPageData, page } = this.props;

        return (
            <div className={styles['BaseContainer']} id="start">
                <ModalContext.Provider value={this.state}>
                    {/* <PageContext.Consumer > */}
                    <header className={styles['BaseContainer__Header']}>
                        {/* <PageContext.Consumer >
                            {pageContext => {
                                return ( */}
                        <figure className={classNames(styles['BaseContainer__Logo'], { [styles["BaseContainer__Logo--Construction"]]: page === "Construction" })}>
                            <img
                                {...logoData}
                            />
                        </figure>
                        {/* )
                            }}
                        </PageContext.Consumer> */}
                        <Header {...headerData} mainNavData={mainNavData} />
                        <div className={styles['BaseContainer__StickyContainer']}>
                            <MobileNav {...menuData} />
                        </div>
                    </header>
                    <main>
                        {this.props.children}
                        {/* <PageContext.Consumer>
                            {pageContext => {
                                if (pageContext === "Start") {
                                    return <StartContainer knowledge={knowledgeData} data={startData} />
                                }
                                if (pageContext === "Construction") {
                                    return <ConstructionPage {...constructionPageData} />
                                }
                            }}
                        </PageContext.Consumer> */}
                    </main>
                    {/* </PageContext.Consumer> */}
                </ModalContext.Provider>
                <footer className={styles['BaseContainer__Footer']}>
                    <Footer {...footerData} />
                </footer>
            </div>
        );
    }
}

export default withRouter(BaseContainer);
