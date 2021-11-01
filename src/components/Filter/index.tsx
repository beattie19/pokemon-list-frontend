import React, { Dispatch } from "react";
import {
  ActionType,
  FilterAction,
  ValueFilters,
} from "components/Filter/usePokemonFilterState";

type FilterProps = {
  filterState: ValueFilters;
  dispatch: Dispatch<ActionType>;
};
const Filter: React.FC<FilterProps> = ({ filterState, dispatch }) => (
  <div>
    <p>Filter</p>
    <input
      type="number"
      name="min"
      id="weight-min"
      min="0"
      max="9999"
      value={filterState.weight[0]}
      onChange={({ target: { value } }) => {
        dispatch({
          type: FilterAction.SetMinWeight,
          payload: parseInt(value),
        });
      }}
    />
    <input
      type="number"
      name="max"
      id="weight-max"
      min="0"
      max="9999"
      value={filterState.weight[1]}
      onChange={({ target: { value } }) => {
        dispatch({
          type: FilterAction.SetMaxWeight,
          payload: parseInt(value),
        });
      }}
    />
  </div>
);

export default Filter;
