import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
export const getStaticProps = async () => {
  var res = await fetch("https://jsonplaceholder.typicode.com/users");
  var data = await res.json();
  console.log(data);
  return {
    props: {
      users: data,
    },
  };
};
export default function Home({ users }) {
  return (
    <div className="content-container">
      <h1>Home</h1>
      {users.map((user) => (
        <Link href={"/" + user.id} key={user.id}>
          <a>
            <h1 className={styles.user_name}>{user.name}</h1>
          </a>
        </Link>
      ))}
    </div>
  );
}
