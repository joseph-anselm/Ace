import Footer from "./Footer";
import Menubar from "./menubar";
import Header from "./header";
import Header2 from "./header2";
import Head from "next/head";
import Homeblog from "./homeblog";
import { useRouter } from "next/router";
import { useHistory } from "react-router";
import { useEffect } from "react";
import { img1 } from "../public/img/ace2.jpg";

function Layouts({ children, title, imgsrc }) {
  const router = useRouter();

  const showHeader = router.asPath === "/" ? true : false;
  const showHeader2 = router.asPath === "/about" ? true : false;
  const showHeader3 = router.asPath === "/contact" ? true : false;
  const showHeader4 = router.asPath === "/galleries" ? true : false;
  const showHeader5 = router.pathname === "/blog" ? true : false;
  const showHeader6 = router.pathname === "/blog/[slug]" ? true : false;
  const showHeader7 = router.pathname === "/[slug]" ? true : false;
  const showBlog = router.asPath === "/" ? true : false;

  return (
    <div>
      <Head>
        <title>Welcome to Ace Initiatives Website - {Layouts.title}</title>
        <link rel="icon" href="/img/favicon.png" />
      </Head>
      <Menubar />

      {showHeader && <Header />}
      {showHeader2 && <Header2 />}
      {showHeader3 && <Header2 />}
      {showHeader4 && <Header2 />}
      {showHeader5 && <Header2 />}
      {showHeader7 && <Header2 />}
      {children}
      {showBlog && <Homeblog />}
      <Footer />
    </div>
  );
}

export default Layouts;
