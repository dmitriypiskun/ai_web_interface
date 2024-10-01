import styles from "./authorization-root.module.css";
import chatGPT from "../../assets/chat-gpt.svg";
import { Outlet } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface AuthorizationRootProps {}

export const AuthorizationRoot: React.FC<AuthorizationRootProps> = () => {
  return (
    <>
      <header className={styles["header"]}>
        <img src={chatGPT} className={styles["logo"]} alt="ChatGPT logo" />
      </header>

      <main className={styles["main"]}>
        <Outlet />
      </main>

      <footer className={styles["footer"]}>
        <span>Some footer text</span>
      </footer>
    </>
  );
};
