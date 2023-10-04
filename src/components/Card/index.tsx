import { BaseStats } from "../../components/BaseStats";
import { Image } from "../../components/Image";
import { Properties } from "../../components/Properties";
import { Type } from "../../components/Type";
import React from "react";
import { Pokemon } from "src/types/types";
import styles from "./styles.module.scss";

type CardProps = {
  pokemon: Pokemon;
};

const capitalise = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const Card: React.FC<CardProps> = ({ pokemon }) => (
  <div className={`${styles.cardBorder}`}>
    <div className={styles.title}>
      <h3>{capitalise(pokemon.name)}</h3>
      <Type types={pokemon.types} />
    </div>
    <div className={styles.pokemonImage}>
      <Image url={pokemon.sprite} />
    </div>
    <Properties height={pokemon.height} weight={pokemon.weight} />
    <BaseStats baseStats={pokemon.baseStats} />
  </div>
);

export { Card };
