import { PureComponent } from 'react';
import dynamic from "next/dynamic";
// import Head from 'next/head';
//Data for getStaticProps
import menuData from '../data/menu.js';
import knowledgeData from '../data/knowledge.js';
import startData from '../data/startData.js';
import logoData from "../data/logo";
import footerData from "../data/footer";
import headerData from "../data/header";
import mainNavData from "../data/mainNav";
import metaData from "../data/Meta/metaStartPage";

import BaseContainer from "../containers/BaseContainer";
import Meta from "../components/Meta";
import { IMobileNavProps } from '../components/MobileNavButton/MobileNav.jsx';
import { IKnowledgeData, ILogoData, IStartPageData } from '../types/typesData.jsx';
import { IFooter } from '../components/Footer/Footer.jsx';
import { IHeaderProps } from '../components/Header/Header.jsx';
import { IMainNavProps } from '../components/MainNav/MainNav.jsx';
import PageContext from "../utils/Page.context";
// import StartPage from '../containers/StartPage/StartPage.tsx';
import StartPage from "../containers/StartPage";
// const StartPage = dynamic(() => import("../containers/StartPage"));
import Icon from "../components/Icon";


export interface IBaseProps {
    baseData: {
        menuData: IMobileNavProps;
        knowledgeData?: IKnowledgeData;
        startData?: IStartPageData;
        logoData: ILogoData;
        footerData: IFooter;
        headerData: IHeaderProps;
        mainNavData: IMainNavProps;
        metaData: any;
        constructionPageData: any;
    };
}

class Base extends PureComponent<IBaseProps>  {
    state = {};

    render() {
        let { baseData } = this.props;

        return (
            <>
                <Meta {...baseData.metaData} />
                {/* <h1 style={{fontSize: '5rem'}}>hej</h1> */}
                {/* <div style={{height: '200px', width: '200px', border: '1px solid red'}}>
                    <img style={{minWidth: '100%', transform: 'scale(1.2)'}} src="/icons/arrowNext.svg" alt="" />
                    {/* <Icon type={'arrowNext'} color={'Primary'} />
                </div> */}
                <PageContext.Provider value="Start">
                    <BaseContainer {...baseData} page={"Start"}>
                        <StartPage
                            knowledge={baseData.knowledgeData}
                            data={baseData.startData} />
                    </BaseContainer>
                </PageContext.Provider>
            </>
        );
    }
}

export async function getStaticProps() {
    return {
        props: {
            baseData: {
                menuData,
                knowledgeData,
                startData,
                logoData,
                footerData,
                headerData,
                mainNavData,
                metaData
            }
        },
    };
}

export default Base;
