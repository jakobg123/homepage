import { PureComponent } from "react";
import Head from "next/head";

import menuData from '../../data/menu.js';
import knowledgeData from '../../data/knowledge.js';
import startData from '../../data/startData.js';
import logoData from "../../data/Logo/logoConstruction";
import footerData from "../../data/footer";
import headerData from "../../data/Header/headerConstruction";
import mainNavData from "../../data/mainNav/mainNavConstruction";
import constructionPageData from "../../data/ConstructionPage/ConstructionPageData";

import BaseContainer from "../../containers/BaseContainer";
import Meta from "../../components/Meta";
import PageContext from "../../utils/Page.context";

import { IBaseProps } from "../index";

class OtherBase extends PureComponent<IBaseProps>  {
    state = {};

    render() {
        let { baseData } = this.props;

        return (
            <>
                <Meta title={"Sajtbygget - så här gjorde jag webbsidan"} description={"Snart är jag en nyexad junior Frontendutvecklare. Nu söker jag jobb där jag får arbeta med webbutveckling och programmering. Här är min portfolio-sajt."} />
                <PageContext.Provider value="Construction">
                    <BaseContainer
                        {...baseData}
                    />
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
                // knowledgeData,
                startData,
                logoData,
                footerData,
                headerData,
                mainNavData,
                constructionPageData,
            }
        },
    };
}

export default OtherBase;
