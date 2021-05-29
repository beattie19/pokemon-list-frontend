import React from "react";
import styles from "./styles.module.scss";

export type PropertiesProps = {
  height: number;
  weight: number;
};

const Properties: React.FC<PropertiesProps> = ({ height, weight }) => (
  <ul className={styles.basePropertiesContainer}>
    <li>Height: {height}</li>
    <li>Weight: {weight}</li>
  </ul>
);

export { Properties };
