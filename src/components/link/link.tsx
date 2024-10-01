import classNames from "classnames";
import styles from "./link.module.css";

export interface LinkProps {
  label?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick: () => Promise<void> | void;
}

export const Link: React.FC<LinkProps> = ({
  label,
  className,
  style,
  onClick,
}) => {
  const classes = classNames({
    [`${styles["container"]}`]: true,
    className: className,
  });

  return (
    <a className={classes} style={style} onClick={onClick}>
      {label}
    </a>
  );
};
