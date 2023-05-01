import React, { Dispatch } from "react";
import { ActionType, FilterAction, FilterRange } from "./usePokemonFilterState";
import BaseFilter from "./BaseFilter";

type AttackFilterProps = {
  filterState: FilterRange;
  dispatch: Dispatch<ActionType>;
};

const AttackFilter: React.FC<AttackFilterProps> = ({
  filterState,
  dispatch,
}) => (
  <>
    <p>Attack</p>
    <BaseFilter
      name="attack"
      filterState={filterState}
      dispatch={dispatch}
      filterMinAction={FilterAction.SetMinAttack}
      filterMaxAction={FilterAction.SetMaxAttack}
    />
  </>
);

export { AttackFilter };
