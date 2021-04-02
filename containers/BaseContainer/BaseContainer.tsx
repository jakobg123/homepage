import { PureComponent } from 'react';

import Header from '../../components/Header';
import MobileNav from '../../components/MobileNavButton';
import Footer from '../../components/Footer';
import styles from './BaseContainer.module.scss';

import StartContainer from '../StartContainer';

interface BaseContainerProps {
    menuData: any[];
    knowledgeData: any[];
    startData: any[];
    logoData: {};
}

class BaseContainer extends PureComponent<BaseContainerProps> {
    state = {};

    render() {
        const { menuData, knowledgeData, startData, logoData } = this.props;

        return (
            <div className={styles['BaseContainer']} id="start">
                <header className={styles['BaseContainer__Header']}>
                    <figure className={styles['BaseContainer__Logo']}>
                        <img
                            {...logoData}
                        />
                    </figure>
                    <Header />
                    <div className={styles['BaseContainer__StickyContainer']}>
                        <MobileNav data={menuData} />
                    </div>
                </header>
                <main>
                    <StartContainer knowledge={knowledgeData} data={startData} />
                </main>
                <footer className={styles['BaseContainer__Footer']}>
                    <Footer />
                </footer>
            </div>
        );
    }
}

export default BaseContainer;
