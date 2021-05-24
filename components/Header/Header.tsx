import {useContext} from "react";
import Image from '../Image';
import MainNav from "../MainNav";
import Hero from "../Hero";
import styles from './Header.module.scss';
import classNames from 'classnames';

// import { IImageProps } from '../../types/types';
import { IMainNavProps } from "../MainNav/MainNav";
import HeroImageContext, { HeroImageProvider } from "../../utils/HeroImage.context";

export interface IHeaderProps {
    heroImage: IImageProps,
    mainNavData: IMainNavProps;
}

const Header: React.FC<IHeaderProps> = ({ heroImage, mainNavData }) => {
    return (
        <div className={styles['Header']}>
            <div className={styles['Header__MainNavWrapper']}>
                <MainNav {...mainNavData} />
            </div>
            <Hero heroImage={heroImage} />
            {/* <div
                className={classNames(styles['Header__ImageWrapper'])}>
                <Image
                    {...heroImage}
                    modifier={[styles[heroImage.modifierClass]]}
                />
            </div> */}
        </div>
    );
};

export default Header;


