import Head from "next/head";
import "../styles/main.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          import LayoutMain from "../../components/LayoutMain";
="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
