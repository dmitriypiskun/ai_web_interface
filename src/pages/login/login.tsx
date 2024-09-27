import styles from "./login.module.css";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  return (
    <div className={styles["container"]}>
      <h1>Login</h1>
    </div>
  );
};
