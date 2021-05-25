import styles from './Image.module.scss';
import classNames from "classnames";
import Head from "next/head";

interface IMetaProps {
    title: string;
    description: string;
}

const Meta: React.FC<IMetaProps> = ({
    title,
    description,
}) => {


    return (
        <Head>
            <title>
                {title}
            </title>
            <meta
                name="description"
                content={description}
            />
            <link
                rel="preload"
                href="/fonts/QuicksandLatin/quicksand-v22-latin-regular.woff2"
                as="font"
                crossOrigin=""
            />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap" rel="stylesheet"></link>
            <meta name="google-site-verification" content="tbnaq2fOx_d8yW90nFU4WBYBWkwwfX6tScz3D5Uv-Ik" />
            <meta name="google-site-verification" content="5GoQ3qyH1Rgfuzz33wrb3zCdXe0AjLVK1y7t102UWnw" />
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
    );
};

export default Meta;
