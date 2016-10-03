import { FETCH_JOBS, FETCH_JOB } from '../actions/index';

const INITIAL_STATE = { all: [], job: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_JOBS:
      return { ...state, all: action.payload.data };
    case FETCH_JOB:
      return { ...state, job: action.payload.data };
    default:
      return state;
  }
}
