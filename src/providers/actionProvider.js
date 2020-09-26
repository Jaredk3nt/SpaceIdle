// Handles current task and modifying state
// Handles combat and modifying state
import { createContext, useContext, useRef, useState } from 'react';
// Providers
import { StateContext } from './stateProvider';
// Variables
import { TYPES } from './stateProvider';

export const ActionContext = createContext();

function calculateDelay(crew, resource) {
  // TODO: base delay on task
  return 2000;
}

export function ActionProvider({ children }) {
  const interval = useRef();
  const [width, setWidth] = useState(0);
  const { state, dispatch } = useContext(StateContext);

  const delay = calculateDelay(state.task.crew, state.task.resource);

  useEffect(() => {
    // At start of application check for previous task
    if (state.task) {
      const updatedCount = Math.floor((Date.now() - state.tasklastUpdated) / delay);
      // TODO: show dialog for update
      // TODO: calculate previous actions, update state
    }
  }, []);

  function taskComplete() {
    const { crew, resource } = state.task;
    // TODO: do any updates required when the timer completes for a task
  }

  function startInterval() {
    setWidth(100);
    interval.current = setInterval(() => {
      taskComplete();
      setWidth(0);
      setTimeout(() => {
        setWidth(100);
      }, 10);
    }, DELAY);
  }

  function startTask(crew, resource) {
    dispatch({ type: TYPES.UPDATE_TASK, crew, resource});
    startInterval();
  }

  function endTask() {
    dispatch({ type: TYPES.END_TASK });
    clearInterval(interval.current);
  }

  return <ActionContext.Provider value={{ startTask, endTask, width }}>{children}</ActionContext.Provider>;
}
