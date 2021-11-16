import React, { Dispatch } from "react";
import {
  ActionType,
  ValueFilters,
} from "components/Filters/usePokemonFilterState";
import { WeightFilter } from "components/Filters/WeightFilter";
import { HeightFilter } from "components/Filters/HeightFilter";

type FilterProps = {
  filterState: ValueFilters;
  dispatch: Dispatch<ActionType>;
};
const Filters: React.FC<FilterProps> = ({ filterState, dispatch }) => (
  <div>
    <p>Filter</p>
    <WeightFilter filterState={filterState.weight} dispatch={dispatch} />
    <HeightFilter filterState={filterState.height} dispatch={dispatch} />
  </div>
);

export default Filters;
