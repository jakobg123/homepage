import { useContext } from "react";
import dynamic from "next/dynamic";
// import MainNav from "../MainNav";
const MainNav = dynamic(() => import("../MainNav"));
import Hero from "../Hero";
import styles from './Header.module.scss';
import classNames from 'classnames';
import ModalContext from "../../utils/context/Modal.context";
import { IImageProps } from '../../types/types';
import { IMainNavProps } from "../MainNav/MainNav";
import useWindowSize from "../../utils/Hooks/useWindowSize";

export interface IHeaderProps {
    heroImage: IImageProps,
    mainNavData: IMainNavProps;
}

const Header: React.FC<IHeaderProps> = ({ heroImage, mainNavData }) => {
    const { fadeOutElement, hideElement } = useContext(ModalContext);
    const [screenWidth] = useWindowSize();

    return (
        <div className={styles['Header']}>
            {screenWidth >= 768 &&
                <div className={classNames(styles['Header__MainNavWrapper'],
                    { [styles['Header__MainNavWrapper--Hide']]: hideElement },
                    { [styles['Header__MainNavWrapper--Fade']]: fadeOutElement })}>
                        <MainNav {...mainNavData} />
                </div>
                }
             <Hero heroImage={heroImage} />
        </div>
    );
};

export default Header;


