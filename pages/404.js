import Link from "next/link";

const Notfound = () => {
  return (
    <div>
      <h1>Oooooops......</h1>
      <h3>The Page you are requesting can not be found</h3>
      <p>
        Go back to the
        <Link href="/">
          <a> Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default Notfound;
