import Header2 from "../components/header2";
import Layouts from "../components/layouts";
Layouts.links = "/contact";
Header2.title = "Contact Page";

Layouts.links = "/about";
Header2.title = "Reach out to us";
Header2.imgsrc = "/img/ace3.jpg";
Header2.excerpt =
  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum";

const contact = () => {
  return (
    <div>
      <h1>Contact us</h1>
    </div>
  );
};

export default contact;
