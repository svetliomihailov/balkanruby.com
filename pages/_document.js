import Document, { Head, Main, NextScript } from 'next/document';

const GA_TRACKING_ID = 'UA-107279956-1';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <title>Balkan Ruby Styleguide</title>
          <link rel="stylesheet" type="text/css" href="/static/css/application.css" />

          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)};
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
