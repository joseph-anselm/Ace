import Footer from "./Footer";
import Menubar from "./menubar";
import Header from "./header";
import Header2 from "./header2";

import { useRouter } from "next/router";
import { useHistory } from "react-router";
import { useEffect } from "react";

Layouts.links;
function Layouts({ children, title }) {
  const router = useRouter();
  // let links = ["/about", "/contact"];

  const showHeader = router.asPath === "/" ? true : false;
  const showHeader2 = router.asPath === Layouts.links ? true : false;
  const showBlog = router.asPath === "/" ? true : false;

  return (
    <div>
      <Menubar />
      {showHeader && <Header />}
      {showHeader2 && <Header2 {...title} />}

      {children}

      <Footer />
    </div>
  );
}

export default Layouts;
