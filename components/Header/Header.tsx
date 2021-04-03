import Image from '../Image';
import MainNav from "../MainNav";

import styles from './Header.module.scss';
import classNames from 'classnames';

import { IImageProps } from '../../types/types';
import {IMainNavProps} from "../MainNav/MainNav";

export interface IHeaderProps {
    heroImage: IImageProps,
    mainNavData: IMainNavProps;
}

const Header: React.FC<IHeaderProps> = ({ heroImage, mainNavData }) => {

    return (
        <div className={styles['Header']}>
            <div className={styles['Header__MainNavWrapper']}>
                <MainNav {...mainNavData}/>
            </div>
            <div
                className={classNames(styles['Header__ImageWrapper'])}>
                <Image
                    {...heroImage}
                    focal={{ x: '5%', y: '30%' }}
                />
            </div>
        </div>
    );
};

export default Header;


