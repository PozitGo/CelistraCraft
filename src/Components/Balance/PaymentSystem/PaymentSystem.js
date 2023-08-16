import React from "react";
import styles from "./PaymentSystem.module.css";

const PaymentSystem = (props) => {
  const handleContainerClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <button
      className={`${styles.PaymentSystemContainer} ${
        props.isActive ? styles.active : ""
      }`}
      onClick={handleContainerClick}
    >
      <img src={props.logo} alt={`${props.title} Logo`} />
      <section>
        <section>{props.title}</section>
        <section>Оплата только в рублях</section>
      </section>
    </button>
  );
};

export default PaymentSystem;
