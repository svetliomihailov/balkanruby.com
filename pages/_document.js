import Document, { Head, Main, NextScript } from 'next/document';
import Helmet from 'react-helmet'

const GA_TRACKING_ID = 'UA-107279956-1';

export default class MyDocument extends Document {
  static async getInitialProps (...args) {
    const documentProps = await super.getInitialProps(...args)
      // see https://github.com/nfl/react-helmet#server-usage for more information
      // 'head' was occupied by 'renderPage().head', we cannot use it
      return { ...documentProps, helmet: Helmet.renderStatic() }
    }

    // should render on <html>
    get helmetHtmlAttrComponents () {
      return this.props.helmet.htmlAttributes.toComponent()
    }

    // should render on <body>
    get helmetBodyAttrComponents () {
      return this.props.helmet.bodyAttributes.toComponent()
    }

    // should render on <head>
    get helmetHeadComponents () {
      return Object.keys(this.props.helmet)
          .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
          .map(el => this.props.helmet[el].toComponent())
    }

    get helmetJsx () {
      return (<Helmet
        htmlAttributes={{lang: 'en'}}
        title='Hello next.js!'
        meta={[
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { property: 'og:title', content: 'Hello next.js!' }
        ]}
      />)
    }
  render() {
    return (
      <html lang="en" {...this.helmetHtmlAttrComponents}>
        <Head>
          {this.helmetJsx}
          {this.helmetHeadComponents}

          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
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
        <body {...this.helmetBodyAttrComponents}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
