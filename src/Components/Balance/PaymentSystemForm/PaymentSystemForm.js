import React, { useState, useRef, useEffect } from "react";
import styles from "./PaymentSystemForm.module.css";
import useApiRequest from "./useApiRequest";
import ErrorModal from "../../UI/Notification/ErrorModal";

const PaymentSystemForm = (props) => {
  const { IsPostSuccess, IsSuccessPayment, isSuccessNick, requestAPIPayment } =
    useApiRequest();
  const [IsValidNickName, setIsValidNickName] = useState(true);
  const [IsValidEmail, setIsValidEmail] = useState(true);
  const InputNickName = useRef("");
  const InputEmail = useRef("");

  const NickNameOnFocus = () => setIsValidNickName(true);
  const EmailOnFocus = () => setIsValidEmail(true);

  useEffect(() => {
    setIsValidNickName(isSuccessNick);
  }, [isSuccessNick]);

  const SubmitHandler = async (event) => {
    event.preventDefault();

    if (
      typeof InputEmail.current.value === "string" &&
      InputEmail.current.value !== "" &&
      InputEmail.current.value.includes("@")
    ) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
      return;
    }

    if (props.Index === null) {
      props.PaymentOnClick(false);
      return;
    }

    await requestAPIPayment(
      InputNickName.current.value,
      InputEmail.current.value,
      props.Amount,
      props.Index
    );
  };

  return (
    <React.Fragment>
      <form className={styles.FormContainer} onSubmit={SubmitHandler}>
        <section>
          <section>
            <label htmlFor="nickInput">Введите свой ник</label>
            <input
              type="text"
              id="nickInput"
              ref={InputNickName}
              onFocus={NickNameOnFocus}
            />
            {!IsValidNickName && (
              <p className={styles.ErrorMessage}>
                Аккаунт с указанным ником не существует
              </p>
            )}
          </section>
          <section>
            <label htmlFor="emailInput">Введите свою почту</label>
            <input
              type="email"
              id="emailInput"
              ref={InputEmail}
              onFocus={EmailOnFocus}
            />
            {!IsValidEmail ||
              (!IsPostSuccess && (
                <p className={styles.ErrorMessage}>
                  Некорректный адрес электронной почты
                </p>
              ))}
          </section>
        </section>
        <button type="submit"> Перейти к оплате </button>
      </form>

      {!IsSuccessPayment && (
        <ErrorModal title="Ошибка" description="Пополнения баланса" />
      )}
    </React.Fragment>
  );
};

export default PaymentSystemForm;
