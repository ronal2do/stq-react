import { combineReducers } from 'redux';
import JobsReducer from './jobs';

const rootReducer = combineReducers({
  jobs: JobsReducer
});

export default rootReducer;
