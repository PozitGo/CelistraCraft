import styles from "./FixedBalance.module.css";
import Money1 from "../../../Images/IconsMoney/Money 1.svg";
import Money2 from "../../../Images/IconsMoney/Money 2.svg";
import Money3 from "../../../Images/IconsMoney/Money 3.svg";
import Money4 from "../../../Images/IconsMoney/Money 4.svg";
import Money5 from "../../../Images/IconsMoney/Money 5.svg";

const FixedBalance = (props) => {
  const URLHandler = () => {
    switch (props.money) {
      case 50:
        return Money1;
      case 150:
        return Money2;
      case 500:
        return Money3;
      case 1000:
        return Money4;
      default:
        return Money5;
    }
  };

  const ViewBalance =
    props.money >= 1000
      ? styles.GreatBalanceContainer
      : styles.SmallBalanceContainer;

  return (
    <button
      onClick={() => props.payment(props.money)}
      className={`${styles.BalanceContainer} ${ViewBalance}`}
    >
      <img src={URLHandler()} />
      <section>
        <p className={styles.money}>{props.money}</p>
        <p className={styles.valet}>селистриков</p>
      </section>
    </button>
  );
};

export default FixedBalance;
