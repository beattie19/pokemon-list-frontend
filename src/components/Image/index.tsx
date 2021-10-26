import React from "react";
import styles from "./styles.module.scss";
import { Pokemon } from "../../App";

type ImageProps = {
  url: Pokemon["sprite"];
};
const Image: React.FC<ImageProps> = ({ url }) => (
  <img alt="pokemon image" className={styles.pokemonImage} src={url} />
);

export { Image };
