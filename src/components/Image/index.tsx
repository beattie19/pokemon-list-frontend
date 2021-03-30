import React from "react";
import styles from "./styles.module.scss";

const Image: React.FC = () => (
  <img
    className={styles.pokemonImage}
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png"
  ></img>
);

export { Image };
