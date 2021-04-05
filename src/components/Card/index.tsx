import { Image } from "components/Image";
import React from "react";
import styles from "./styles.module.scss";

const Card: React.FC<{ pokemon: { name } }> = ({ pokemon }) => (
  <div className={styles.cardBorder}>
    <Image />
    <h3>{pokemon.name}</h3>
  </div>
);

export { Card };
