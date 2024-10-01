import classNames from "classnames";
import styles from "./button.module.css";
import { PropsWithChildren } from "react";

export interface ButtonProps {
  text: string;
  type?: "primary" | "outline" | "secondary";
  className?: string;
  onClick: () => Promise<void> | void;
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  text,
  type = "primary",
  className,
  children,
  onClick,
}) => {
  const buttonClasses = classNames({
    [`${styles["button"]}`]: true,
    [`${styles["button-primary"]}`]: type === "primary",
    [`${styles["button-outline"]}`]: type === "outline",
    className: !!className,
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button aria-label={text} className={buttonClasses} onClick={handleClick}>
      {children}
      <div className={styles["button-text"]}>{text}</div>
    </button>
  );
};
