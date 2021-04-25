import React from "react";

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
  <ul>
    <li>HP: {hp}</li>
    <li>Attack: {attack}</li>
    <li>Defence: {defence}</li>
    <li>Special Attack: {specialAttack}</li>
    <li>Special Defense: {specialDefence}</li>
    <li>Speed: {speed}</li>
  </ul>
);

export { BaseStats };
