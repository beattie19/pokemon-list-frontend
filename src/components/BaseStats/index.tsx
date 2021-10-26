import React from "react";
import styles from "./styles.module.scss";
import { Pokemon } from "../../App";

type BaseStatsProps = Pick<Pokemon, "baseStats">;

const BaseStats: React.FC<BaseStatsProps> = ({
  baseStats: { hp, attack, defence, specialAttack, specialDefence, speed },
}) => (
  <ul className={styles.baseStatsContainer}>
    <li>HP: {hp}</li>
    <li>Attack: {attack}</li>
    <li>Defence: {defence}</li>
    <li>Sp. Attack: {specialAttack}</li>
    <li>Sp. Defense: {specialDefence}</li>
    <li>Speed: {speed}</li>
  </ul>
);

export { BaseStats };
