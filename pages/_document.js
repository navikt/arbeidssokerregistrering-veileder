import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    const { Styles, Scripts, Header, Footer } = this.props;

    return (
      <Html lang='no'>
        <Head /> {/* Head må først inn, så kan neste blokk inserte elementer */}
          <script src={`${process.env.NEXT_PUBLIC_HODE_URL}/internarbeidsflatedecorator/v2.1/static/js/head.v2.min.js`}></script>
          <link rel="stylesheet" href={`${process.env.NEXT_PUBLIC_HODE_URL}/internarbeidsflatedecorator/v2.1/static/css/main.css`} />
        <Head>
          {Styles}
          {Scripts}
        </Head>
        <body>
          {Header}
          <Main />
          {Footer}
          <NextScript />
        </body>
      </Html>
    );
  }
}
