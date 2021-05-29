import React, { PureComponent } from 'react';

import Header from '../../components/Header';
import MobileNav from '../../components/MobileNavButton';
import Footer from '../../components/Footer';
import styles from './BaseContainer.module.scss';

import StartContainer from '../StartContainer';
import ConstructionPage from "../ConstructionPage";

import { IMainNavProps } from "../../components/MainNav/MainNav";
import { IMobileNavProps } from '../../components/MobileNavButton/MobileNav';

import { ILogoData, IKnowledgeData, IStartContainerData } from "../../types/typesData";
import { IHeaderProps } from '../../components/Header/Header';
import { IFooter } from "../../components/Footer/Footer";

import { withRouter, NextRouter } from 'next/router'

import { TargetLinksProvider } from "../../utils/TargetLinks.context";
import HeroImageContext from "../../utils/HeroImage.context";
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
    startData?: IStartContainerData;
    logoData: ILogoData;
    footerData: IFooter;
    headerData: IHeaderProps;
    mainNavData: IMainNavProps;
    constructionPageData: any;
};

class BaseContainer extends PureComponent<BaseContainerProps> {
    state = {};

    render() {
        const { menuData, knowledgeData, startData, logoData, footerData, headerData, mainNavData, constructionPageData } = this.props;

        const context = HeroImageContext.Consumer;

        return (
            <div className={styles['BaseContainer']} id="start">
                <header className={styles['BaseContainer__Header']}>
                    <HeroImageContext.Consumer >
                        {pageContext => {
                            return (
                                <figure className={classNames(styles['BaseContainer__Logo'], { [styles["BaseContainer__Logo--Construction"]]: pageContext === "Construction" })}>
                                    <img
                                        {...logoData}
                                    />
                                </figure>
                            )
                        }}
                    </HeroImageContext.Consumer>
                    <Header {...headerData} mainNavData={mainNavData} />
                    <div className={styles['BaseContainer__StickyContainer']}>
                        <MobileNav {...menuData} />
                    </div>
                </header>
                <main>
                    <HeroImageContext.Consumer>
                        {pageContext => {
                            if(pageContext === "Start"){
                                return <StartContainer knowledge={knowledgeData} data={startData} />
                            }
                            if(pageContext === "Construction"){
                                return <ConstructionPage {...constructionPageData} />
                            }
                        }}
                    </HeroImageContext.Consumer>
                    {/* {(!!knowledgeData && !!startData) && <StartContainer knowledge={knowledgeData} data={startData} />} */}
                    {/* {(!!knowledgeData && !!startData) && <StartContainer knowledge={knowledgeData} data={startData} />}
                    <ConstructionPage {...constructionPageData} /> */}

                </main>
                <footer className={styles['BaseContainer__Footer']}>
                    <Footer {...footerData} />
                </footer>
            </div>
        );
    }
}

export default withRouter(BaseContainer);
