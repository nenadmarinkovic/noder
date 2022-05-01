import Head from "next/head";
import Input from "../components/Input";
import Data from "../components/Data";
import styles from "../styles/Home.module.css";

import 'bootstrap/dist/css/bootstrap.css'

export default function Home({ todo }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Noder Client</title>
        <meta name="description" content="Noder app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossorigin="anonymous"
        />
        
      </Head>

      <Input />
      <Data todo={todo} />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:4000/todos`);
  const todo = await res.json();

  return { props: { todo } };
}
