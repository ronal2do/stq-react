import { combineReducers } from 'redux';
import Jobs from './jobs';
import ActiveJob from './activeJob'
import MenuReducer from './menu'

const rootReducer = combineReducers({
	jobs: Jobs,
	activeJob: ActiveJob,
	isOpenned: MenuReducer
});

export default rootReducer;
