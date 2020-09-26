import { useState, useEffect, useReducer } from 'react';

export function useLocalStorage(key, initialArg) {
  const [state, setState] = useState(() => {
    try {
      const lsState = localStorage.getItem(key);
      return lsState ? JSON.parse(lsState) : initialArg;
    } catch (err) {
      console.error(err);
      return initialArg;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}

export function useLocalStorageReducer(key, reducer, initialArg) {
  const [state, dispatch] = useReducer(reducer, () => {
    try {
      const lsState = localStorage.getItem(key);
      return lsState ? JSON.parse(lsState) : initialArg;
    } catch (err) {
      console.error(err);
      return initialArg;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, dispatch];
}
