import styles from "./divider.module.css";

export interface DividerProps {
  label?: string;
}

export const Divider: React.FC<DividerProps> = ({ label }) => {
  return (
    <div className={styles["container"]}>
      <span className={styles["label"]}>{label}</span>
    </div>
  );
};
