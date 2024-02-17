"use client";

import classNames from "classnames";
import styles from "./index.module.scss";
import Paperclip from "../icons/Paperclip";
import Paperplane from "../icons/Paperplane";

interface Props {
  className?: string;
}

const cn = classNames.bind(styles);

export default function ChatFooter({ className }: Props) {
  return (
    <form className={cn(className, styles["chat-footer"])}>
      <button className={styles["chat-footer__options"]}>
        <Paperclip fillColor="#fff" />
      </button>

      <input type="text" className={styles["chat-footer__input"]} />
      <button type="submit" className={styles["chat-footer__send"]}>
        <Paperplane fillColor="#fff" />
      </button>
    </form>
  );
}
