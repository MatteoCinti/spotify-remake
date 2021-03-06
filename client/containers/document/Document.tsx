import { ServerStyleSheet } from 'styled-components';
import Document, { DocumentContext, Html } from 'next/document';

import DocumentHead from './DocumentHead';
import DocumentBody from './DocumentBody';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <DocumentHead />
        <DocumentBody />
      </Html>
    );
  }
}

export default MyDocument;
