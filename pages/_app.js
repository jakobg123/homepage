import '../index.scss';
import { HeroImageProvider } from '../utils/HeroImage.context';
import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'highlight.js/styles/agate.css';

function MyApp({ Component, pageProps }) {
    return (
        // <HeroImageProvider>
        <Component {...pageProps} />
        // </HeroImageProvider>
    );
}

export default MyApp;
