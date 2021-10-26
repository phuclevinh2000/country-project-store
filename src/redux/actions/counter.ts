import { AddCOunterAction, ADD_COUNTER } from '../../types/types';

export default function addCounter(): AddCOunterAction {
  return {
    type: ADD_COUNTER,
  };
}
