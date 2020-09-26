import React, { createContext } from 'react';
import { enums, string } from 'fun-enums';
// Utils
import { updateInventory } from '../utils/inventory';
import { useLocalStorageReducer } from '../utils/useLocalStorage';
// Variables
import { CREW, SHIP_PARTS } from '../constants';

const INITIAL_STATE = {
  areas: [],
  inventory: [],
  task: undefined,
  ship: {
    [SHIP_PARTS.cannon.key]: undefined,
    [SHIP_PARTS.drill.key]: undefined,
    [SHIP_PARTS.sensor.key]: undefined,
  },
  crew: {
    [CREW.miner.key]: {
      level: 0,
      xp: 0,
    },
    [CREW.admiral.key]: {
      level: 0,
      xp: 0,
    },
    [CREW.navigator.key]: {
      level: 0,
      xp: 0,
    },
  },
};

export const TYPES = enums(string)('UPDATE_TASK', 'END_TASK', 'COMPLETE_TASK');

function reducer(state, action) {
  console.log({ action })
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
    case TYPES.COMPLETE_TASK:
      return {
        ...state,
        inventory: updateInventory(state.inventory, action.items),
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
  const [state, dispatch] = useLocalStorageReducer(
    'test-game-state',
    reducer,
    INITIAL_STATE
  );

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}
