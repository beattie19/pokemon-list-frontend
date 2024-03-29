import { Dispatch, useReducer } from "react";

export const MIN_FILTER_VALUE = 0;
export const MAX_FILTER_VALUE = 9999;

export type FilterRange = [number, number];

export type ValueFilters = {
  weight: FilterRange;
  height: FilterRange;
  attack: FilterRange;
};

export enum FilterAction {
  SetMaxWeight = "setMaxWeight",
  SetMinWeight = "setMinWeight",
  SetMinHeight = "setMinHeight",
  SetMaxHeight = "setMaxHeight",
  SetMinAttack = "setMinAttack",
  SetMaxAttack = "setMaxAttack",
  Reset = "reset",
}

export type ActionType = {
  type: FilterAction;
  payload: number;
};

const init = (): ValueFilters => {
  return {
    weight: [MIN_FILTER_VALUE, MAX_FILTER_VALUE],
    height: [MIN_FILTER_VALUE, MAX_FILTER_VALUE],
    attack: [MIN_FILTER_VALUE, MAX_FILTER_VALUE],
  };
};

const reducer = (state: ValueFilters, action: ActionType): ValueFilters => {
  switch (action.type) {
    case FilterAction.SetMaxWeight:
      return { ...state, weight: [state.weight[0], action.payload] };
    case FilterAction.SetMinWeight:
      return { ...state, weight: [action.payload, state.weight[1]] };
    case FilterAction.SetMaxHeight:
      return { ...state, height: [state.height[0], action.payload] };
    case FilterAction.SetMinHeight:
      return { ...state, height: [action.payload, state.height[1]] };
    case FilterAction.SetMaxAttack:
      return { ...state, attack: [state.attack[0], action.payload] };
    case FilterAction.SetMinAttack:
      return { ...state, attack: [action.payload, state.attack[1]] };
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
