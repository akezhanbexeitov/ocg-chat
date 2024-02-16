import Image from "next/image";
import styles from "./index.module.scss";
import Link from "next/link";

export default function ChatCard() {
  return (
    <Link href={`/some-chat-id`}>
      <li className={styles["chat-card"]}>
        <div className={styles["chat-card__left"]}>
          <div className={styles["chat-card__image"]}>
            <Image
              src="/images/avatar.png"
              width={60}
              height={60}
              alt="User Avatar"
            />
          </div>

          <div className={styles["chat-card__details"]}>
            <h2 className={styles["chat-card__title"]}>Chat title</h2>
            <h3 className={styles["chat-card__user"]}>User name</h3>
            <h4 className={styles["chat-card__message"]}>Message</h4>
          </div>
        </div>

        <div className={styles["chat-card__other"]}>
          <time>15:34</time>

          <div className={styles["chat-card__unseen"]}>
            <span>2</span>
          </div>
        </div>
      </li>
    </Link>
  );
}
