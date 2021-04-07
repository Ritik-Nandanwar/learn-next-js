import Link from "next/link";
const Notfound = () => {
  // useEffect(() => {
  //     setTimeout( history.push("/"), 2000)
  // } , [])
  return (
    <>
      <h1>ERROR OCCOURED</h1>
      <Link href="/">
        <a>Go back</a>
      </Link>
    </>
  );
};

export default Notfound;
