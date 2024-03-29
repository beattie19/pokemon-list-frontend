import React, { Dispatch } from "react";
import {
  MIN_FILTER_VALUE,
  MAX_FILTER_VALUE,
  FilterRange,
  FilterAction,
  ActionType,
} from "../Filters/usePokemonFilterState";

type FilterProps = {
  name: string;
  filterState: FilterRange;
  dispatch: Dispatch<ActionType>;
  filterMinAction: FilterAction;
  filterMaxAction: FilterAction;
};

const getIntOrEmptyString = (value: number) =>
  Number.isInteger(value) ? value : "";

const BaseFilter: React.FC<FilterProps> = ({
  name,
  filterState,
  dispatch,
  filterMinAction,
  filterMaxAction,
}) => {
  const handleChangeMin = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: filterMinAction,
      payload: parseInt(value),
    });
  };

  const handleChangeMax = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: filterMaxAction,
      payload: parseInt(value),
    });
  };

  return (
    <div>
      <input
        type="number"
        data-testid={`${name}-min`}
        name={`${name}-min`}
        id={`${name}-min`}
        min={MIN_FILTER_VALUE}
        max={MAX_FILTER_VALUE}
        value={getIntOrEmptyString(filterState[0])}
        onChange={handleChangeMin}
      />
      <input
        type="number"
        data-testid={`${name}-max`}
        name={`${name}-max`}
        id={`${name}-max`}
        min={MIN_FILTER_VALUE}
        max={MAX_FILTER_VALUE}
        value={getIntOrEmptyString(filterState[1])}
        onChange={handleChangeMax}
      />
    </div>
  );
};

export default BaseFilter;
