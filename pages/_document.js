import Document, { Head, Main, NextScript } from 'next/document';
import Header from '../docs/Header';
import Footer from '../docs/Footer';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <title>Balkan Ruby Styleguide</title>
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/css/application.css"
          />
        </Head>
        <body>
          <Header />
          <Main />
          <Footer />
          <NextScript />
        </body>
      </html>
    );
  }
}
