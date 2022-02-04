import Footer from "./Footer";
import Menubar from "./menubar";
import Header from "./header";
import Header2 from "./header2";
import Homeblog from "./homeblog";
import { useRouter } from "next/router";
import { useHistory } from "react-router";
import { useEffect } from "react";
import { img1 } from "../public/img/ace2.jpg";
Layouts.links;
function Layouts({ children, title, imgsrc }) {
  const router = useRouter();

  const showHeader = router.asPath === "/" ? true : false;
  const showHeader2 = router.asPath === "/about" ? true : false;
  const showHeader3 = router.asPath === "/contact" ? true : false;
  const showBlog = router.asPath === "/" ? true : false;

  return (
    <div>
      <Menubar />
      {showHeader && <Header />}
      {showHeader2 && <Header2 />}
      {showHeader3 && <Header2 />}

      {children}
      {showBlog && <Homeblog />}
      <Footer />
    </div>
  );
}

export default Layouts;
