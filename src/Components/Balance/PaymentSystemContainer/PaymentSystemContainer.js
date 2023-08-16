import styles from "./PaymentSystemContainer.module.css";
import PaymentSystem from "../PaymentSystem/PaymentSystem";
import Yookassa from "../../../Images/PaymentSystem/Yookassa.ru.png";
import React, { useState } from "react";
import PaymentSystemForm from "../PaymentSystemForm/PaymentSystemForm";
import Close from "../../../Images/Close.png";

const PaymentSystemContainer = (props) => {
  const [IsValidPaymentSystem, setIsValidPaymentSystem] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleContainerClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
      setIsValidPaymentSystem(true);
    }
  };

  return (
    <section className={styles.wrapper}>
      <section className={styles.Contain}>
        <img
          onClick={() => props.onClose(true)}
          src={Close}
          className={styles.CloseImage}
          alt="Close Icon"
        />
        <h2>Выбор платёжной системы</h2>
        <h5>Баланс к пополнению: {props.money} селистриков</h5>

        <section>
          <PaymentSystem
            title="Yookassa"
            logo={Yookassa}
            description="Оплата в рублях"
            isActive={activeIndex === 0}
            onClick={() => handleContainerClick(0)}
          />
          <PaymentSystem
            title="Yookassa"
            logo={Yookassa}
            description="Оплата в рублях"
            isActive={activeIndex === 1}
            onClick={() => handleContainerClick(1)}
          />
        </section>
        {!IsValidPaymentSystem && (
          <p className={styles.ErrorMessage}>Вы не выбрали платёжную систему</p>
        )}

        <PaymentSystemForm
          Index={activeIndex}
          PaymentOnClick={setIsValidPaymentSystem}
          Amount={props.money}
        />
      </section>
    </section>
  );
};

export default PaymentSystemContainer;
