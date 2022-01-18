import Link from "next/link";
import Layouts from "../components/layouts";
import Header2 from "../components/header2";

Layouts.links = "/about";
Header2.title = "About Page";
const about = () => {
  return (
    <div>
      <h1>About us</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </div>
  );
};

export default about;
