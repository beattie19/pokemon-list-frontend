import React, { Dispatch } from "react";
import {
  ActionType,
  ValueFilters,
} from "components/Filters/usePokemonFilterState";
import { WeightFilter } from "components/Filters/WeightFilter";

type FilterProps = {
  filterState: ValueFilters;
  dispatch: Dispatch<ActionType>;
};
const Filters: React.FC<FilterProps> = ({ filterState, dispatch }) => (
  <div>
    <p>Filter</p>
    <WeightFilter filterState={filterState.weight} dispatch={dispatch} />
  </div>
);

export default Filters;
