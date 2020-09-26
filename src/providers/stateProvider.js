import { createContext } from 'react';
import { enums, string } from 'fun-enums';
// Utils
import { useLocalStorageReducer } from '../utils/useLocalStorage';
// Variables
import { CREW, SHIP_PARTS } from '../constants';

const INITIAL_STATE = {
  areas: [],
  inventory: [],
  task: undefined,
  ship: {
    [SHIP_PARTS.cannon]: undefined,
    [SHIP_PARTS.drill]: undefined,
    [SHIP_PARTS.sensor]: undefined,
  },
  crew: {
    [CREW.miner]: {
      level: 0,
      xp: 0,
    },
    [CREW.admiral]: {
      level: 0,
      xp: 0,
    },
    [CREW.navigator]: {
      level: 0,
      xp: 0,
    },
  },
};

export const TYPES = enums(string)('UPDATE_TASK', 'END_TASK');

function reducer(state, action) {
  switch (action.type) {
    case TYPES.UPDATE_TASK:
      return {
        ...state,
        task: {
          crew: action.crew,
          resource: action.resource,
          lastUpdated: Date.now(),
        },
      };
    case TYPES.END_TASK:
      return {
        ...state,
        task: undefined,
      };
    default:
      throw {
        message: 'Unknown action in reducer',
        action,
      };
  }
}

export const StateContext = createContext(INITIAL_STATE);

export function StateProvider({ children }) {
  const [state, dispatch] = useLocalStorageReducer(reducer, INITIAL_STATE);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}
