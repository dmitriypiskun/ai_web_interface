import { useState } from "react";
import { InputField } from "../input-field/input-field";

import styles from "./password-field.module.css";

import showIcon from "../../assets/show.svg";
import hideIcon from "../../assets/hide.svg";

export interface PasswordFieldProps {
  label: string;
  value?: string;
  placeholder?: string;
  isErrored?: boolean;
  onChange: (value: string) => Promise<void> | void;
}

export const PasswordField: React.FC<PasswordFieldProps> = ({
  label,
  value,
  placeholder,
  isErrored,
  onChange,
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleVisibilityToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsShowPassword(!isShowPassword);
  };

  return (
    <InputField
      isRequired
      type={isShowPassword ? "text" : "password"}
      label={label}
      value={value}
      placeholder={placeholder}
      isErrored={isErrored}
      errorText="Не заполнено поле"
      onChange={onChange}
    >
      <button
        aria-label={isShowPassword ? "Скрыть пароль" : "Показать пароль"}
        className={styles["button-password"]}
        onClick={handleVisibilityToggle}
      >
        <img
          src={isShowPassword ? showIcon : hideIcon}
          alt={isShowPassword ? "Скрыть пароль" : "Показать пароль"}
          className={styles["button-password-icon"]}
        />
      </button>
    </InputField>
  );
};
