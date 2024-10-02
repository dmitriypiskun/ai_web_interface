import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Button, Divider, InputField } from "../../components";
import styles from "./login.module.css";

import googleIcon from "../../assets/google.png";
import showIcon from "../../assets/show.svg";
import hideIcon from "../../assets/hide.svg";
import { useAuthenticateContext } from "../../contexts/authenticate.context";

const target = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$");

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  const [step, setStep] = useState(0);

  const [email, setEmail] = useState<string>("example.example@example.com");
  const [isEmailError, setIsEmailError] = useState(false);

  const [password, setPassword] = useState("");
  const [isPasswordError, setIsPasswordError] = useState(false);

  const [isShowPassword, setIsShowPassword] = useState(false);

  const navigate = useNavigate();
  const { login, googleLogin } = useAuthenticateContext();

  const handleNextClick = () => {
    const isEmailValid = target.test(email);

    if (isEmailValid) {
      setIsEmailError(false);
      setStep(1);
    } else {
      setIsEmailError(true);
    }
  };

  const handleLoginClick = async () => {
    if (password) {
      setIsPasswordError(false);
      await login({ email, password });
    } else {
      setIsPasswordError(true);
    }
  };

  const handleRememberPasswordClick = () => {};

  const handlePasswordVisibilityToggle = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setIsShowPassword(!isShowPassword);
  };

  const firstStep = (
    <>
      <h1 className={styles["header"]}>С возвращением</h1>

      <InputField
        isRequired
        label="Адрес электронной почты"
        value={email}
        isErrored={isEmailError}
        errorText="Недопустимый адрес электронной почты."
        onChange={setEmail}
      />
    </>
  );

  const secondStep = (
    <>
      <h1 className={styles["header"]}>Ввод пароля</h1>

      <div className={styles["content"]}>
        <div className={styles["content-edit"]}>
          <span className={styles["content-edit-label"]}>{email}</span>

          <Link label="Редактировать" onClick={() => setStep(0)} />
        </div>

        <InputField
          isRequired
          type={isShowPassword ? "text" : "password"}
          label="Пароль"
          value={password}
          isErrored={isPasswordError}
          errorText="Не заполнено поле"
          onChange={setPassword}
        >
          <button
            aria-label={isShowPassword ? "Скрыть пароль" : "Показать пароль"}
            className={styles["button-password"]}
            onClick={handlePasswordVisibilityToggle}
          >
            <img
              src={isShowPassword ? showIcon : hideIcon}
              alt={isShowPassword ? "Скрыть пароль" : "Показать пароль"}
              className={styles["button-password-icon"]}
            />
          </button>
        </InputField>

        <Link
          label="Забыли пароль?"
          style={{ textAlign: "start" }}
          onClick={handleRememberPasswordClick}
        />
      </div>
    </>
  );

  return (
    <form className={styles["container"]}>
      {step === 0 ? firstStep : secondStep}

      <Button
        text="Продолжить"
        onClick={step === 0 ? handleNextClick : handleLoginClick}
      />

      <span>
        У вас нет учетной записи?{" "}
        <Link label="Зарегистрироваться" onClick={() => navigate("register")} />
      </span>

      {step === 0 && (
        <>
          <Divider label="Или" />

          <Button
            type="outline"
            text="Продолжить с Google"
            onClick={googleLogin}
          >
            <img
              src={googleIcon}
              alt="Google icon"
              className={styles["button-image"]}
            />
          </Button>
        </>
      )}
    </form>
  );
};
