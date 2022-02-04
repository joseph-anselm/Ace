import Header2 from "../components/header2";
import Layouts from "../components/layouts";

Layouts.links = "/about";
Header2.title = "About Page";
Header2.imgsrc = "/img/ace1.jpg";
Header2.excerpt =
  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum";

Layouts.links = "/projects";
Header2.title = "Projects Page";
const contact = () => {
  return (
    <div>
      <h1>Projects</h1>
    </div>
  );
};

export default contact;
