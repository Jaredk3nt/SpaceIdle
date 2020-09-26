import { RESOURCES } from '../constants';

export function calculateDelay(state) {
  if (state.task) {
    // TODO: calculate delay for a given resource and all upgrades
    return 2000;
  }
  return -1;
}
