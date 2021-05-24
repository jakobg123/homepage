import '../index.scss';
import {HeroImageProvider} from "../utils/HeroImage.context";

function MyApp({ Component, pageProps }) {
    return (
        // <HeroImageProvider>
            <Component {...pageProps} />
        // </HeroImageProvider>
    );
}

export default MyApp;
