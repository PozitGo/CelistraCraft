import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Server from "./Server";
import styles from "./ServerList.module.css";
import LoadingCircle from "../UI/LoadingCircle/LoadingCircle";
import ErrorModal from "../UI/Notification/ErrorModal";

const ServerList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [IsError, setIsError] = useState(false);

  const RequestDataServers = useCallback((isOne) => {
    if (isOne) {
      setLoading(true);
    }
    axios
      .get("https://i.celistracraft.net/api/branches")
      .then((response) => {
        setData(response.data);
        if (isOne) {
          setLoading(false);
          setIsError(false);
        }
      })
      .catch((error) => {
        if (isOne) {
          setLoading(false);
          setIsError(true);
        }
      });
  }, []);

  useEffect(() => {
    RequestDataServers(true);
    const interval = setInterval(() => {
      RequestDataServers(false);
    }, 30000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.HeaderText}>Наши серверы</h2>

      {loading && <LoadingCircle />}
      {!loading &&
        data.map((server) => (
          <Server
            key={server.id}
            id={server.id}
            name={server.name}
            description={server.description}
            status={server.status}
          />
        ))}
      {IsError && (
        <React.Fragment>
          <p className={styles.ErrorMessage}>Ошибка загрузки списка серверов</p>
          <ErrorModal title="Ошибка" description="Загрузки списка серверов" />
        </React.Fragment>
      )}
    </section>
  );
};

export default React.memo(ServerList);
