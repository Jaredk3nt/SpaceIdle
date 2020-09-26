import React, { useCallback } from 'react';
// Handles current task and modifying state
// Handles combat and modifying state
import {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  useMemo,
} from 'react';
// Providers
import { StateContext } from './stateProvider';
// Utils
import { calculateDelay } from '../utils/tasks';
// Variables
import { TYPES } from './stateProvider';
import { RESOURCES } from '../constants';

export const ActionContext = createContext();

export function ActionProvider({ children }) {
  const interval = useRef();
  const [width, setWidth] = useState(0);
  const { state, dispatch } = useContext(StateContext);

  const delay = useMemo(() => calculateDelay(state), [state]);

  useEffect(() => {
    // At start of application check for previous task
    if (state.task) {
      const timeOffline = Date.now() - state.task.lastUpdated;
      const tasksCompleted = Math.floor(timeOffline / delay);
      // TODO: calculate previous actions, update state
      console.log(`You were offline for ${timeOffline / 1000} s`);
      // TODO: show dialog for update
      endTask();
    }
  }, []);

  // TODO: write an effect that will handle ending tasks automatically if required
  useEffect(() => {
    if (delay > 0 && state.task) {
      startInterval(state);
    } else {
      clearInterval(interval.current);
    }
  }, [delay, state.task]);

  const startInterval = useCallback(
    (state) => {
      setWidth(100);
      interval.current = setInterval(() => {
        taskComplete(state);
        setWidth(0);
        setTimeout(() => {
          setWidth(100);
        }, 10);
      }, delay);
    },
    [delay]
  );

  const startTask = useCallback(
    (crew, resource) => {
      if (state.task) {
        clearInterval(interval.current);
      }
      dispatch({ type: TYPES.UPDATE_TASK, crew, resource });
      // startInterval();
    },
    [startInterval]
  );

  const endTask = useCallback(() => {
    dispatch({ type: TYPES.END_TASK });
  }, []);

  const taskComplete = useCallback(
    (state) => {
      if (state.task) {
        const { crew, resource } = state.task;
        const resourceObj = RESOURCES[resource];
        const items = resourceObj.complete();
        dispatch({
          type: TYPES.COMPLETE_TASK,
          crew,
          resource,
          items,
          xp: resourceObj.xp,
        });
      } else {
        endTask();
      }
    },
    [endTask]
  );

  return (
    <ActionContext.Provider value={{ startTask, endTask, width, delay }}>
      {children}
    </ActionContext.Provider>
  );
}
