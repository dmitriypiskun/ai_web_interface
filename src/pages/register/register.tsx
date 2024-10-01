import styles from "./register.module.css";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface RegisterProps {}

export const Register: React.FC<RegisterProps> = () => {
  return (
    <div className={styles["container"]}>
      <h1>Register</h1>
    </div>
  );
};
