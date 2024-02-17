import ChatHeader from "@/components/ChatHeader";
import styles from "./page.module.scss";

export default function Page() {
  return (
    <div className={styles.chat}>
      <ChatHeader className={styles.chat__header} />
      <div className={styles.chat__body}>Chat body</div>
      <div className={styles.chat__footer}>Chat footer</div>
    </div>
  );
}
