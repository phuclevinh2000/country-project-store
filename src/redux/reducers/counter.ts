import { AddCOunterAction, ADD_COUNTER, CounterState } from '../../types/types';

const initialState: CounterState = { count: 0 };

export default function counter(
  state = initialState,
  action: AddCOunterAction
) {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
}
