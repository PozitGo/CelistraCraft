import React, { useState, useEffect } from "react";
import styles from "./Notification.module.css";

const Notification = ({ title, description }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${styles.notification} ${
        visible ? styles.visible : styles.hide
      }`}
    >
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Notification;
