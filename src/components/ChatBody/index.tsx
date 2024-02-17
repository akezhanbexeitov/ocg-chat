import classNames from "classnames";
import styles from "./index.module.scss";

interface Props {
  className?: string;
}

const cn = classNames.bind(styles);

export default function ChatBody({ className }: Props) {
  return (
    <div className={cn(className, styles["chat-body"])}>
      <div className={styles["chat-body__messages"]}>
        <p className={styles["chat-body__message"]}>Hello there!</p>
        <p className={styles["chat-body__message-mine"]}>Hello from myself!</p>
        <p className={styles["chat-body__message"]}>Hello there!</p>
        <p className={styles["chat-body__message-mine"]}>Hello from myself!</p>
        <p className={styles["chat-body__message"]}>Hello there!</p>
        <p className={styles["chat-body__message-mine"]}>Hello from myself!</p>
        <p className={styles["chat-body__message"]}>Hello there!</p>
        <p className={styles["chat-body__message-mine"]}>Hello from myself!</p>
        <p className={styles["chat-body__message"]}>Hello there!</p>
        <p className={styles["chat-body__message-mine"]}>Hello from myself!</p>
        <p className={styles["chat-body__message"]}>Hello there!</p>
        <p className={styles["chat-body__message-mine"]}>Hello from myself!</p>
      </div>
    </div>
  );
}
