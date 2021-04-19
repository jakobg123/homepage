import { PureComponent } from 'react';
import Head from 'next/head';
import { InferGetStaticPropsType } from "next";
//Data for getStaticProps
import menuData from '../data/menu.js';
import knowledgeData from '../data/knowledge.js';
import startData from '../data/startData.js';
import logoData from "../data/logo";
import footerData from "../data/footer";
import headerData from "../data/header";
import mainNavData from "../data/mainNav";

import BaseContainer from "../containers/BaseContainer";
import { IMobileNavProps } from '../components/MobileNavButton/MobileNav.jsx';
import { IKnowledgeData, ILogoData, IStartContainerData } from '../types/typesData.jsx';
import { IFooter } from '../components/Footer/Footer.jsx';
import { IHeaderProps } from '../components/Header/Header.jsx';
import { IMainNavProps } from '../components/MainNav/MainNav.jsx';

interface IBaseProps {
    baseData: {
        menuData: IMobileNavProps;
        knowledgeData: IKnowledgeData;
        startData: IStartContainerData;
        logoData: ILogoData;
        footerData: IFooter;
        headerData: IHeaderProps;
        mainNavData: IMainNavProps;
    };
}

class Base extends PureComponent<IBaseProps>  {
    state = {};

    render() {
        let { baseData } = this.props;

        return (
            <>
                <Head>
                    <title>
                        Frontendutvecklare som vill bygga din webb | jakobgauffin.se
                    </title>
                    <meta
                        name="description"
                        content="Snart är jag en nyexad junior Frontendutvecklare. Nu söker jag jobb där jag får arbeta med webbutveckling och programmering. Här är min portfolio-sajt."
                    />
                    <link
                        rel="preload"
                        href="/fonts/QuicksandLatin/quicksand-v22-latin-regular.woff2"
                        as="font"
                        crossOrigin=""
                    />
                    <meta name="google-site-verification" content="tbnaq2fOx_d8yW90nFU4WBYBWkwwfX6tScz3D5Uv-Ik" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0, user-scalable=yes"
                    />
                    <link
                        rel="apple-touch-icon-precomposed"
                        sizes="57x57"
                        href="favicon/apple-touch-icon-57x57.png"
                    />
                    <link
                        rel="apple-touch-icon-precomposed"
                        sizes="114x114"
                        href="favicon/apple-touch-icon-114x114.png"
                    />
                    <link
                        rel="apple-touch-icon-precomposed"
                        sizes="72x72"
                        href="favicon/apple-touch-icon-72x72.png"
                    />
                    <link
                        rel="apple-touch-icon-precomposed"
                        sizes="144x144"
                        href="favicon/apple-touch-icon-144x144.png"
                    />
                    <link
                        rel="apple-touch-icon-precomposed"
                        sizes="60x60"
                        href="favicon/apple-touch-icon-60x60.png"
                    />
                    <link
                        rel="apple-touch-icon-precomposed"
                        sizes="120x120"
                        href="favicon/apple-touch-icon-120x120.png"
                    />
                    <link
                        rel="apple-touch-icon-precomposed"
                        sizes="76x76"
                        href="favicon/apple-touch-icon-76x76.png"
                    />
                    <link
                        rel="apple-touch-icon-precomposed"
                        sizes="152x152"
                        href="favicon/apple-touch-icon-152x152.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href="favicon/favicon-196x196.png"
                        sizes="196x196"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href="favicon/favicon-96x96.png"
                        sizes="96x96"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href="favicon/favicon-32x32.png"
                        sizes="32x32"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href="favicon/favicon-16x16.png"
                        sizes="16x16"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href="favicon/favicon-128.png"
                        sizes="128x128"
                    />
                    <meta name="application-name" content="&nbsp;" />
                    <meta name="msapplication-TileColor" content="#FFFFFF" />
                    <meta name="msapplication-TileImage" content="mstile-144x144.png" />
                    <meta
                        name="msapplication-square70x70logo"
                        content="mstile-70x70.png"
                    />
                    <meta
                        name="msapplication-square150x150logo"
                        content="mstile-150x150.png"
                    />
                    <meta
                        name="msapplication-wide310x150logo"
                        content="mstile-310x150.png"
                    />
                    <meta
                        name="msapplication-square310x310logo"
                        content="mstile-310x310.png"
                    />
                </Head>
                <BaseContainer
                    {...baseData}
                />
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
            }
        },
    };
}

export default Base;
