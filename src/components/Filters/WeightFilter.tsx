import React, { Dispatch } from "react";
import {
  ActionType,
  FilterAction,
  FilterRange,
} from "components/Filters/usePokemonFilterState";
import BaseFilter from "components/Filters/BaseFilter";

type WeightFilterProps = {
  filterState: FilterRange;
  dispatch: Dispatch<ActionType>;
};

const WeightFilter: React.FC<WeightFilterProps> = ({
  filterState,
  dispatch,
}) => (
  <BaseFilter
    name="weight"
    filterState={filterState}
    dispatch={dispatch}
    filterMinAction={FilterAction.SetMinWeight}
    filterMaxAction={FilterAction.SetMaxWeight}
  />
);

export { WeightFilter };
