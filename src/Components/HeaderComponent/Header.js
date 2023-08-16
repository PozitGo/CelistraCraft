import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import CelistraLogo from "../../Images/celistra.ico";
import styles from "./Header.module.css";

const ScrollHandler = (scrolls) => {
  scroll.scrollTo(scrolls);
};

const Header = () => {
  return (
    <header className={styles.Header}>
      <button onClick={ScrollHandler.bind(null, 800)}>Наши высеры</button>
      <button
        onClick={ScrollHandler.bind(null, 0)}
        className={styles.LogoContainer}
      >
        <img src={CelistraLogo} alt="CelistraLogo" />
        <p>Помойка</p>
      </button>
      <button onClick={ScrollHandler.bind(null, 1450)}>
        Пожертвование инвалидам
      </button>
    </header>
  );
};

export default Header;
