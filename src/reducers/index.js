import { combineReducers } from 'redux';
import JobsReducer from './jobs';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  jobs: JobsReducer,
  form: formReducer
});

export default rootReducer;
