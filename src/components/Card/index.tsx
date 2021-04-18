import { Image } from "components/Image";
import React from "react";
import { Pokemon } from "src/App";
import styles from "./styles.module.scss";

type CardProps = {
  pokemon: Pokemon;
};

const Card: React.FC<CardProps> = ({ pokemon }) => (
  <div className={styles.cardBorder}>
    <Image url={pokemon.sprite} />
    <h3>{pokemon.name}</h3>
  </div>
);

export { Card };
