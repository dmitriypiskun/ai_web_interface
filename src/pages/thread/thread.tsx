import styles from "./thread.module.css";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ThreadProps {}

export const Thread: React.FC<ThreadProps> = () => {
  return (
    <div className={styles["container"]}>
      <h1>Threads</h1>
    </div>
  );
};
