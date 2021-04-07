import "../styles/globals.css";
import Layout from "./layout";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      {" "}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
