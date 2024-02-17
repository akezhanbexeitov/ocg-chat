import ChatHeader from "@/components/ChatHeader";
import styles from "./page.module.scss";
import ChatBody from "@/components/ChatBody";
import ChatFooter from "@/components/ChatFooter";

export default function Page() {
  return (
    <div className={styles.chat}>
      <ChatHeader className={styles.chat__header} />
      <ChatBody className={styles.chat__body} />
      <ChatFooter className={styles.chat__footer} />
    </div>
  );
}
