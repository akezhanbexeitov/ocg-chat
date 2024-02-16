import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/main.scss";
import styles from "./layout.module.scss";
import ChatCard from "@/components/cards/ChatCard/ChatCard";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OCG Chat",
  description: "Chat application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.messenger}>
          <section className={styles["messenger-left"]}>
            <nav className={styles["messenger-left__chats"]}>
              <ul>
                {Array.from({ length: 10 }).map((_, index) => (
                  <ChatCard key={index} />
                ))}
              </ul>
            </nav>
          </section>
          <section className={styles["messenger-right"]}>{children}</section>
        </main>
      </body>
    </html>
  );
}
