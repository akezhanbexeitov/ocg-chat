import styles from "./page.module.scss";

export default function Page() {
  return (
    <div className={styles.chat}>
      <div className={styles["chat__header"]}>Chat header</div>
      <div className={styles["chat__body"]}>Chat body</div>
      <div className={styles["chat__footer"]}>Chat footer</div>
    </div>
  );
}
