import Footer from "./Footer";
import Menubar from "./menubar";
import Header from "./header";
import Header2 from "./header2";
import Home from "../pages/index";
import { useRouter } from "next/router";

function Layouts({ children }) {
  const router = useRouter();
  const showHeader = router.asPath === "/" ? true : false;
  const showHeader2 = router.asPath === "/about" ? true : false;
  return (
    <div>
      <Menubar />
      {showHeader && <Header />}
      {showHeader2 && <Header2 />}
      {children}
      <Footer />
    </div>
  );
}

export default Layouts;
