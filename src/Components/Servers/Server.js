import React, { useState, useEffect } from "react";
import styles from "./Server.module.css";

const Server = ({ name, description, status }) => {
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
    <section className={styles.ContainServer}>
      <div>{name}</div>
      {width > 1500 && <p className={styles.Description}>{description}</p>}
      {status.enabled && (
        <section>
          <p className={styles.players}>
            {status.online.current}/{status.online.max}
          </p>
          <p className={styles.online}>Online</p>
        </section>
      )}
      {!status.enabled && <div className={styles.offline}>Offline</div>}
      {width < 1500 && <p className={styles.Description}>{description}</p>}
    </section>
  );
};

export default React.memo(Server);
