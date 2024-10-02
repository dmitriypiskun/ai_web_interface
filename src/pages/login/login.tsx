import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Link,
  Button,
  Divider,
  InputField,
  PasswordField,
} from "../../components";
import styles from "./login.module.css";

import googleIcon from "../../assets/google.png";

import { useAuthenticateContext } from "../../contexts/authenticate.context";
import { emailValidate } from "../../utils/validation";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  const [step, setStep] = useState(0);

  const [email, setEmail] = useState<string>("");
  const [isEmailError, setIsEmailError] = useState(false);

  const [password, setPassword] = useState("");
  const [isPasswordError, setIsPasswordError] = useState(false);

  const navigate = useNavigate();
  const { login, googleLogin } = useAuthenticateContext();

  const handleNextClick = () => {
    const isEmailValid = emailValidate(email);

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

        <PasswordField
          label="Пароль"
          value={password}
          isErrored={isPasswordError}
          onChange={setPassword}
        />

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
        <Link
          label="Зарегистрироваться"
          onClick={() => navigate("/register")}
        />
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
