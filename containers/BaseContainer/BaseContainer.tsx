import { PureComponent } from 'react';

import Header from '../../components/Header';
import MobileNav from '../../components/MobileNavButton';
import Footer from '../../components/Footer';
import styles from './BaseContainer.module.scss';

import StartContainer from '../StartContainer';

import {IMainNavProps} from "../../components/MainNav/MainNav";
import { IMobileNavProps } from '../../components/MobileNavButton/MobileNav';

import {ILogoData, IKnowledgeData, IStartContainerData} from "../../types/typesData";
import { IHeaderProps } from '../../components/Header/Header';
import { IFooter } from "../../components/Footer/Footer";

export interface BaseContainerProps {
    menuData: IMobileNavProps;
    knowledgeData: IKnowledgeData;
    startData: IStartContainerData;
    logoData: ILogoData;
    footerData: IFooter;
    headerData: IHeaderProps;
    mainNavData: IMainNavProps;
}

class BaseContainer extends PureComponent<BaseContainerProps> {
    state = {};

    render() {
        const { menuData, knowledgeData, startData, logoData, footerData, headerData, mainNavData } = this.props;

        return (
            <div className={styles['BaseContainer']} id="start">
                <header className={styles['BaseContainer__Header']}>
                    <figure className={styles['BaseContainer__Logo']}>
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
                    <StartContainer knowledge={knowledgeData} data={startData} />
                </main>
                <footer className={styles['BaseContainer__Footer']}>
                    <Footer {...footerData} />
                </footer>
            </div>
        );
    }
}

export default BaseContainer;
