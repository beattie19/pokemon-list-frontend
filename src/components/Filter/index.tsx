import React from "react";

type FilterProps = {
  weightFilter: [number, number];
  setWeightFilter: (value: [number, number]) => void;
};
const Filter: React.FC<FilterProps> = ({ weightFilter, setWeightFilter }) => {
  //maybe use react hook - reducer?
  const handleSetWeightFilterMin = (value: number) =>
    setWeightFilter([value, weightFilter[1]]);
  const handleSetWeightFilterMax = (value: number) =>
    setWeightFilter([weightFilter[0], value]);

  return (
    <div>
      <p>Filter</p>
      <input
        type="number"
        name="min"
        id="weight-min"
        min="0"
        max="9999"
        value={weightFilter[0] || 0}
        onChange={({ target: { value } }) => {
          if (!value) {
            handleSetWeightFilterMin(undefined);
          }
          handleSetWeightFilterMin(parseInt(value));
        }}
      />
      <input
        type="number"
        name="max"
        id="weight-max"
        min="0"
        max="9999"
        value={weightFilter[1] ?? 0}
        onChange={({ target: { value } }) => {
          if (!value) {
            handleSetWeightFilterMax(undefined);
          }
          handleSetWeightFilterMax(parseInt(value));
        }}
      />
    </div>
  );
};

export default Filter;
