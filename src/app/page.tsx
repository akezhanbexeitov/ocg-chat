import styles from "./page.module.scss";

export default async function Home() {
  return (
    <div className={styles.chat}>
      <h1>Choose a chat to start messaging</h1>
    </div>
  );
}
