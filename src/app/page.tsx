import styles from "./page.module.scss";

export default async function Home() {
  return <h1 className={styles.text}>Choose a chat to start messaging</h1>;
}
