import React, { useEffect, useState } from "react";

import styles from "../styles/DisplayUsers.module.css";

const apiID = "6373974392ea308edb55b204";
const url = "https://dummyapi.io/data/v1/user";

const DisplayUsers = ({}) => {
  const [data, setData] = useState([]);

  const config = {
    method: "GET",
    headers: { "app-id": apiID, "Content-Type": "application/json" },
  };

  useEffect(() => {
    fetch(url, config)
      .then((response) => response.json())
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => console.log("err:", err));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>The list of users</h1>
      <div id={styles.cards}>
        {data.map((item) => {
          return (
            <div className={styles.card} key={item.id}>
              <img
                src={item.picture}
                alt="User Image"
                className={styles.image}
              />
              <div className={styles.content}>
                <p className={styles.title}>{item.title}.&nbsp;</p>
                <h2 className={styles.name}>
                  {item.firstName} {item.lastName}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayUsers;
