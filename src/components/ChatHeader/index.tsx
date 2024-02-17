import Image from "next/image";
import styles from "./index.module.scss";
import classNames from "classnames";
import Ellipsis from "../icons/Ellipsis";

interface Props {
  className?: string;
}

const cn = classNames.bind(styles);

export default function ChatHeader({ className }: Props) {
  return (
    <header className={cn(className, styles["chat-header"])}>
      <div className={styles["chat-header__left"]}>
        <div className={styles["chat-header__avatar"]}>
          <Image
            src="/images/avatar.png"
            width={50}
            height={50}
            alt="Chat avatar"
          />
        </div>
        <h1 className={styles["chat-header__title"]}>Chat title</h1>
      </div>
      <div className={styles["chat-header__right"]}>
        <button>
          <Ellipsis fillColor="#fff" />
        </button>
      </div>
    </header>
  );
}
