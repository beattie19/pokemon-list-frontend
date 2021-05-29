import React from "react";
import styles from "./styles.module.scss";

const Type: React.FC<{ types: string[] }> = ({ types }) => (
  <div className={styles.type}>{types.join(" ")}</div>
);

export { Type };
