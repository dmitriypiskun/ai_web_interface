import { Button, Divider, Link } from "../../components";
import styles from "./register.module.css";

import googleIcon from "../../assets/google.png";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface RegisterProps {}

export const Register: React.FC<RegisterProps> = () => {
  const navigate = useNavigate();

  const handleNextPress = () => {};

  return (
    <div className={styles["container"]}>
      <span>
        У вас нет учетной записи?{" "}
        <Link label="Зарегистрироваться" onClick={() => navigate("login")} />
      </span>

      <Divider label="Или" />

      <Button
        type="outline"
        text="Продолжить с Google"
        onClick={handleNextPress}
      >
        <img
          src={googleIcon}
          alt="Google icon"
          className={styles["button-image"]}
        />
      </Button>
    </div>
  );
};
