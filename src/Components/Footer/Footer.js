import React, { useState, useEffect } from "react";
import DiscordButton from "../../Images/FooterIcons/Discord button.svg";
import TelegramButton from "../../Images/FooterIcons/Telegram button.svg";
import VKButton from "../../Images/FooterIcons/VK button.svg";
import MasterCard from "../../Images/MasterCard.svg";
import Visa from "../../Images/Visa.svg";

import DiscordIcon from "../../Images/FooterIcons/DiscordIcon.png";
import VKIcon from "../../Images/FooterIcons/VKIcon.png";
import TGIcon from "../../Images/FooterIcons/TGIcon.png";
import styles from "./Footer.module.css";

const Footer = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer className={styles.FooterContainer}>
      <p>CelistraCraft</p>
      <ul>
        <li>
          <a
            href="https://discord.gg/Jnd6f86qtb"
            target="_blank"
            rel="noreferrer"
          >
            {width > 1200 ? (
              <img src={DiscordButton} alt="Discord" />
            ) : (
              <img src={DiscordIcon} alt="Discord" />
            )}
          </a>
        </li>
        <li>
          <a
            href="http://vk.com/celistracraft"
            target="_blank"
            rel="noreferrer"
          >
            {width > 1200 ? (
              <img src={VKButton} alt="VK" />
            ) : (
              <img src={VKIcon} alt="VK" />
            )}
          </a>
        </li>
        <li>
          <a href="http://t.me/celistracraft" target="_blank" rel="noreferrer">
            {width > 1200 ? (
              <img src={TelegramButton} alt="Telegram" />
            ) : (
              <img src={TGIcon} alt="Telegram" />
            )}
          </a>
        </li>
      </ul>
      <section className={styles.payment}>
        <ul>
          <li>
            <img src={MasterCard} alt="MasterCard" />
          </li>
          <li>
            <img src={Visa} alt="Visa" />
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
