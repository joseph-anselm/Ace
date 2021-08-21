import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/layouts";
import "bootstrap/dist/css/bootstrap.css"; // own css files here
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
