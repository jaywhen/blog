import NextNProgress from 'nextjs-progressbar';
import Layout from '../components/Layout';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NextNProgress height={2} color="rgb(47, 79, 79)" options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
