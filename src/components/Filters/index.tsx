import React, { Dispatch } from "react";
import { ActionType, ValueFilters } from "./usePokemonFilterState";
import { WeightFilter } from "./WeightFilter";
import { HeightFilter } from "./HeightFilter";
import { AttackFilter } from "./AttackFilter";

type FilterProps = {
  filterState: ValueFilters;
  dispatch: Dispatch<ActionType>;
};
const Filters: React.FC<FilterProps> = ({ filterState, dispatch }) => (
  <div>
    <p>Filter</p>
    <WeightFilter filterState={filterState.weight} dispatch={dispatch} />
    <HeightFilter filterState={filterState.height} dispatch={dispatch} />
    <AttackFilter filterState={filterState.attack} dispatch={dispatch} />
  </div>
);

export default Filters;
