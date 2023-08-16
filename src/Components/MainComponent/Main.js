import styles from "./Main.module.css";
import React, { useState } from "react";
import ServerList from "../Servers/ServerList";
import squares from "../../Images/squares.svg";
import DiscordButton from "../../Images/CosialIcons/Discord button.svg";
import TGButton from "../../Images/CosialIcons/Telegram button.svg";
import VKButton from "../../Images/CosialIcons/VK button.svg";
import PaymentContainer from "../Balance/PaymentContainer/PaymentContainer";
import PaymentSystemContainer from "../Balance/PaymentSystemContainer/PaymentSystemContainer";

const Main = () => {
  const [isVisiblePaymentContainer, setVisiblePaymentContainer] =
    useState(true);
  const [PaymentBalance, setPaymentBalance] = useState(0);

  const PaymentHandler = (value) => {
    setVisiblePaymentContainer(false);
    setPaymentBalance(value);
  };

  return (
    <main className={styles.BgImage}>
      <section className={styles.wrapperContain}>
        <section>
          <h1>Мы закрылись!</h1>
          <p>
            Наш первый высер <span>SkyTowns</span>
          </p>
          <p>готов принимать закрытие.</p>

          <section className={styles.LinksMain}>
            <ul>
              <li>
                <a
                  href="https://discord.gg/Jnd6f86qtb"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={DiscordButton} alt="Логтип Discrord" />
                </a>
              </li>
              <li>
                <a
                  href="http://t.me/celistracraft"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={TGButton} alt="Логотип Telegram" />
                </a>
              </li>
              <li>
                <a
                  href="http://vk.com/celistracraft"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={VKButton} alt="Логотип VK" />
                </a>
              </li>
            </ul>
          </section>
        </section>
        <section>
          <img src={squares} alg="Квадратики" />
        </section>
      </section>
      <ServerList />
      {isVisiblePaymentContainer && (
        <PaymentContainer payment={PaymentHandler} />
      )}
      {!isVisiblePaymentContainer && (
        <PaymentSystemContainer
          money={PaymentBalance}
          onClose={setVisiblePaymentContainer}
        />
      )}
    </main>
  );
};

export default Main;
