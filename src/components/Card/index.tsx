import { Image } from "components/Image";
import React from "react";
import styles from "./styles.module.scss";

const Card: React.FC = () => (
  <div className={styles.cardBorder}>
    <Image />
    <h3>Sandslash</h3>
  </div>
);

export { Card };
