import '../index.scss';
// import { HeroImageProvider } from '../utils/HeroImage.context';
// import 'highlight.js/styles/agate.css';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/swiper.scss';
import '../styles/customStyles/carousel.scss';

function MyApp({ Component, pageProps }) {
    return (
        // <HeroImageProvider>
        <Component {...pageProps} />
        // </HeroImageProvider>
    );
}

export default MyApp;
