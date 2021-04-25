import React from "react";

export type PropertiesProps = {
  height: number;
  weight: number;
};

const Properties: React.FC<PropertiesProps> = ({ height, weight }) => (
  <ul>
    <li>Height: {height}</li>
    <li>Weight: {weight}</li>
  </ul>
);

export { Properties };
