import React, { useState, useRef } from "react";
import styles from "./PaymentContainer.module.css";
import FixedBalance from "../FixedBalance/FixedBalance";

const PaymentContainer = (props) => {
  const [inputValue, setInputValue] = useState("");
  const InputRef = useRef(null);
  const [isValid, setValid] = useState(true);

  const PaymentHandler = (value) => {
    props.payment(value);
  };

  const onClickHandler = () => {
    if (isValid) {
      InputRef.current.value = "";
      props.payment(inputValue);
    }
  };

  const ValidationDataHandler = (value) => {
    return value >= 10 && value <= 100000;
  };

  const onChangeHandler = (event) => {
    const value = parseInt(event.target.value);
    setInputValue(event.target.value);
    setValid(ValidationDataHandler(value));
  };

  const onFocusHandler = () => {
    setValid(true);
  };

  const onBlurHandler = () => {
    const value = parseInt(inputValue);
    const isTouched = inputValue !== "";

    if (isTouched && (isNaN(value) || value < 10 || value > 100000)) {
      setValid(false);
    }
  };

  return (
    <section className={styles.PaymentHeader}>
      <h2>Пополнение баланса</h2>
      <section className={styles.PaymentWrapper}>
        <section>
          <FixedBalance money={50} payment={PaymentHandler} />
          <FixedBalance money={150} payment={PaymentHandler} />
          <FixedBalance money={500} payment={PaymentHandler} />
        </section>
        <section>
          <section>
            <FixedBalance money={1000} payment={PaymentHandler} />
            <FixedBalance money={2500} payment={PaymentHandler} />
          </section>
          {!isValid && (
            <p className={styles.ErrorText}>
              Пополнение доступно от 10 до 100000
            </p>
          )}
          <section className={styles.InputYourAmount}>
            <input
              className={isValid ? styles.wrappinput : styles.errorValidation}
              placeholder="Введите сумму"
              min="10"
              max="100000"
              type="number"
              value={inputValue}
              onChange={onChangeHandler}
              onFocus={onFocusHandler}
              onBlur={onBlurHandler}
              ref={InputRef}
            />
            <button
              className={
                isValid ? styles.wrappbutton : styles.errorValidationButton
              }
              onClick={onClickHandler}
            />
          </section>
        </section>
      </section>
    </section>
  );
};

export default PaymentContainer;
