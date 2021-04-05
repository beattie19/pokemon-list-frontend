import React from "react";
import styles from "./styles.module.scss";
import redis from "redis";

const Image: React.FC = () => {
  return (
    <img
      className={styles.pokemonImage}
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png"
    ></img>
  );
};

export { Image };
