import { Dispatch, useReducer } from "react";

export type FilterRange = [number, number];

export type ValueFilters = {
  weight: FilterRange;
};

export enum FilterAction {
  SetMaxWeight = "setMaxWeight",
  SetMinWeight = "setMinWeight",
  Reset = "reset",
}

export type ActionType = {
  type: FilterAction;
  payload: number;
};

const MIN_FILTER_VALUE = 0;
const MAX_FILTER_VALUE = 9999;

const init = (): ValueFilters => {
  return { weight: [MIN_FILTER_VALUE, MAX_FILTER_VALUE] };
};

const reducer = (state: ValueFilters, action: ActionType): ValueFilters => {
  switch (action.type) {
    case FilterAction.SetMaxWeight:
      return { ...state, weight: [state.weight[0], action.payload] };
    case FilterAction.SetMinWeight:
      return { ...state, weight: [action.payload, state.weight[1]] };
    case FilterAction.Reset:
      return init();
    default:
      throw new Error();
  }
};

const usePokemonFilterState = (): [ValueFilters, Dispatch<ActionType>] => {
  const [state, dispatch] = useReducer(reducer, init());

  return [state, dispatch];
};

export default usePokemonFilterState;
