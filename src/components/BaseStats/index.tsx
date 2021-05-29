import React from "react";
import styles from "./styles.module.scss";

export type BaseStatsProps = {
  baseStats: {
    hp: number;
    attack: number;
    defence: number;
    specialDefence: number;
    specialAttack: number;
    speed: number;
  };
};

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
