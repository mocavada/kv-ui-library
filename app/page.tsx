"use client";

import { useEffect } from "react";
import { useGlobalContext } from "./Context/store";
import styles from "../styles/Page.module.css";

export default function Home() {
  const { userId, setUserId, data, setData } = useGlobalContext();

  useEffect(() => {
    setUserId("2");
    setData([
      { firstName: "Tim" },
      { firstName: "Michael" },
      { firstName: "Kyle" },
    ]);
  });

  return (
    <div className={styles.container}>
      <h1>Homepage</h1>

      <div>
        <p>User ID: {userId}</p>
        <p>First Name:</p>
        {data.map((e, i) => (
          <p key={i}>{e.firstName}</p>
        ))}
      </div>
    </div>
  );
};
