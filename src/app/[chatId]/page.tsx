import ChatHeader from "@/components/ChatHeader";
import styles from "./page.module.scss";
import ChatBody from "@/components/ChatBody";

export default function Page() {
  return (
    <div className={styles.chat}>
      <ChatHeader className={styles.chat__header} />
      <ChatBody className={styles.chat__body} />
      <div className={styles.chat__footer}>Chat footer</div>
    </div>
  );
}
