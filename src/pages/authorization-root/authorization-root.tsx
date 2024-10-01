import styles from "./authorization-root.module.css";
import chatGPT from "../../assets/chat-gpt.svg";
import { Outlet } from "react-router-dom";
import { Link } from "../../components";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface AuthorizationRootProps {}

export const AuthorizationRoot: React.FC<AuthorizationRootProps> = () => {
  const handleTermClick = () => {};

  const handlePolicyClick = () => {};

  return (
    <>
      <header className={styles["header"]}>
        <img src={chatGPT} className={styles["logo"]} alt="ChatGPT logo" />
      </header>

      <main className={styles["main"]}>
        <Outlet />
      </main>

      <footer className={styles["footer"]}>
        <Link label="Условия использования" onClick={handleTermClick} />
        <span>|</span>
        <Link label="Политика конфиденциальности" onClick={handlePolicyClick} />
      </footer>
    </>
  );
};
