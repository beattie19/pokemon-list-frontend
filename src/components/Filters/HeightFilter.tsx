import React, { Dispatch } from "react";
import {
  ActionType,
  FilterAction,
  FilterRange,
} from "../Filters/usePokemonFilterState";
import BaseFilter from "../Filters/BaseFilter";

type HeightgFilterProps = {
  filterState: FilterRange;
  dispatch: Dispatch<ActionType>;
};

const HeightFilter: React.FC<HeightgFilterProps> = ({
  filterState,
  dispatch,
}) => (
  <>
    <p>Height</p>
    <BaseFilter
      name="height"
      filterState={filterState}
      dispatch={dispatch}
      filterMinAction={FilterAction.SetMinHeight}
      filterMaxAction={FilterAction.SetMaxHeight}
    />
  </>
);

export { HeightFilter };
