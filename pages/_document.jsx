import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  // ::TODO
  //kan va värt att ta bort preloaden sen

  render() {
    return (
      <Html lang="sv">
        <Head>
          <title>En SEO-lämplig titel</title>
          <link
            rel="preload"
            href="/_next/static/css/d0593b78b17e779e2eb2.css"
            as="style"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
