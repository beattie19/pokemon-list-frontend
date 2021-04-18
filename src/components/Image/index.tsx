import React from "react";
import styles from "./styles.module.scss";

const Image: React.FC<{ url: string }> = ({ url }) => {
  return <img className={styles.pokemonImage} src={url}></img>;
};

export { Image };
