import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Jaywhen</title>
        <meta name="description" content="Jaywhen's blog" />
        <meta name="keywords" content="jaywhen, blog, JavaScript, dev" />
        <meta name="author" content="jaywhen" />
      </Head>
      <div className="flex flex-col max-w-2xl px-6 min-h-screen mx-auto">
        <Navbar />
        <main className="grow mt-20">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
