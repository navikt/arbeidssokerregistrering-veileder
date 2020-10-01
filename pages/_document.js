import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <script src={`${process.env.NEXT_PUBLIC_HODE_URL}/internarbeidsflatedecorator/v2.1/static/js/head.v2.min.js`}></script>
          <link rel="stylesheet" href={`${process.env.NEXT_PUBLIC_HODE_URL}/internarbeidsflatedecorator/v2.1/static/css/main.css`} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
