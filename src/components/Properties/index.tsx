import React from "react";
import styles from "./styles.module.scss";
import { Pokemon } from "src/types/types";

export type PropertiesProps = {
  height: Pokemon["height"];
  weight: Pokemon["weight"];
};

const Properties: React.FC<PropertiesProps> = ({ height, weight }) => (
  <ul className={styles.basePropertiesContainer}>
    <li>Height: {height}</li>
    <li>Weight: {weight}</li>
  </ul>
);

export { Properties };
