import classNames from "classnames";
import styles from "./input-field.module.css";
import { PropsWithChildren, useMemo } from "react";
import errorIcon from "../../assets/error.svg";

export interface InputFieldProps {
  value?: string;
  type?: React.HTMLInputTypeAttribute;
  label?: string;
  isRequired?: boolean;
  errorText?: string;
  isErrored?: boolean;
  placeholder?: string;
  onChange: (value: string) => Promise<void> | void;
}

export const InputField: React.FC<PropsWithChildren<InputFieldProps>> = ({
  value,
  label,
  type = "text",
  isRequired,
  isErrored,
  errorText,
  placeholder,
  children,
  onChange,
}) => {
  const containerClasses = classNames({
    [`${styles["input-wrapper"]}`]: true,
    [`${styles["input-wrapper-error"]}`]: isErrored,
  });

  const labelClasses = classNames({
    [`${styles["label"]}`]: true,
    [`${styles["label-required"]}`]: isRequired,
    [`${styles["label-not-empty"]}`]: value,
    [`${styles["label-error"]}`]: isErrored,
  });

  const id = useMemo(() => label || placeholder, [label, placeholder]);

  return (
    <div className={styles["container-wrapper"]}>
      <div className={containerClasses}>
        <input
          id={id}
          value={value}
          type={type}
          placeholder={placeholder}
          className={styles["input"]}
          aria-label={placeholder}
          aria-required={isRequired}
          aria-errormessage={errorText}
          onChange={(e) => onChange(e.target.value)}
        />
        {children}
      </div>

      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>

      {isErrored && (
        <div className={styles["error-wrapper"]}>
          <img
            src={errorIcon}
            className={styles["error-icon"]}
            alt="Error icon"
          />
          {errorText}
        </div>
      )}
    </div>
  );
};
