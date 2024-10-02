import {
  Button,
  Divider,
  InputField,
  Link,
  PasswordField,
} from "../../components";
import styles from "./register.module.css";

import googleIcon from "../../assets/google.png";

import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { useAuthenticateContext } from "../../contexts/authenticate.context";
import {
  emailValidate,
  hasStringNumber,
  hasStringSymbol,
  hasStringUppercase,
} from "../../utils/validation";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface RegisterProps {}

interface PasswordValidation {
  hasLength: boolean;
  hasUppercase: boolean;
  hasNumber: boolean;
  hasSymbol: boolean;
  isMatch: boolean;
}

export const Register: React.FC<RegisterProps> = () => {
  const [name, setName] = useState("");
  const [isNameError, setIsNameError] = useState(false);

  const [email, setEmail] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);

  const [password, setPassword] = useState("");
  const [isPasswordError, setIsPasswordError] = useState(false);

  const [repeatPassword, setRepeatPassword] = useState("");
  const [isRepeatPasswordError, setRepeatIsPasswordError] = useState(false);

  const navigate = useNavigate();
  const { register, googleLogin } = useAuthenticateContext();

  const passwordValidation = useMemo((): PasswordValidation => {
    return {
      hasLength: password.length >= 8,
      hasUppercase: hasStringUppercase(password),
      hasNumber: hasStringNumber(password),
      hasSymbol: hasStringSymbol(password),
      isMatch: !!password && !!repeatPassword && password === repeatPassword,
    };
  }, [password, repeatPassword]);

  const handleRegisterClick = async () => {
    const isValid = checkForm();

    if (isValid) {
      await register({ name, email, password });
    }
  };

  const checkForm = () => {
    const isNameValid = !!name;
    const isEmailValid = emailValidate(email);
    const isPasswordValid =
      password &&
      passwordValidation.isMatch &&
      passwordValidation.hasLength &&
      passwordValidation.hasUppercase &&
      passwordValidation.hasNumber &&
      passwordValidation.hasSymbol;

    setIsNameError(!isNameValid);
    setIsEmailError(!isEmailValid);
    setIsPasswordError(!isPasswordValid);
    setRepeatIsPasswordError(!isPasswordValid);

    return isNameValid && isEmailValid && isPasswordValid;
  };

  return (
    <form className={styles["container"]}>
      <h1 className={styles["header"]}>Создание учетной записи</h1>

      <InputField
        isRequired
        label="Имя пользователя"
        value={name}
        isErrored={isNameError}
        errorText="Не заполнено поле"
        onChange={setName}
      />

      <InputField
        isRequired
        label="Адрес электронной почты"
        value={email}
        isErrored={isEmailError}
        errorText="Недопустимый адрес электронной почты."
        onChange={setEmail}
      />

      <PasswordField
        label={"Введите пароль"}
        value={password}
        isErrored={isPasswordError}
        onChange={setPassword}
      />

      <PasswordField
        label={"Повторите пароль"}
        value={repeatPassword}
        isErrored={isRepeatPasswordError}
        onChange={setRepeatPassword}
      />

      {password && (
        <ul className={styles["password-error-container"]}>
          {!passwordValidation.hasLength && (
            <li>должен содержать минимум 8 символов</li>
          )}
          {!passwordValidation.hasUppercase && (
            <li>должен содержать минимум 1 символ в верхнем регистре</li>
          )}
          {!passwordValidation.hasNumber && (
            <li>должен содержать минимум 1 цыфру</li>
          )}
          {!passwordValidation.hasSymbol && (
            <li>должен содержать минимум 1 специальный символ</li>
          )}
          {!passwordValidation.isMatch && <li>Пароли не совпадают</li>}
        </ul>
      )}

      <Button text="Продолжить" onClick={handleRegisterClick} />

      <span>
        Уже есть учетная запись?{" "}
        <Link label="Вход в систему" onClick={() => navigate("/login")} />
      </span>

      <Divider label="Или" />

      <Button type="outline" text="Продолжить с Google" onClick={googleLogin}>
        <img
          src={googleIcon}
          alt="Google icon"
          className={styles["button-image"]}
        />
      </Button>
    </form>
  );
};
