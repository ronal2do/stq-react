import { TOOGLE_MENU } from '../actions/index';
//
// export default function(state = null, action) {
// 	switch(action.type) {
// 		case TOOGLE_MENU:
// 			return {value: true};
// 		default:
// 			return state;
// 	}
// }
//
// export default function(state = null, action) {
//   console.log('Action received', action);
//   return state;
// }

export default function(state = {}, action) {
  console.log('Action received', action, state);
	switch(action.type) {
		case TOOGLE_MENU:
		 if (state.id !== action.id) {
			 return state
		 }

		 return Object.assign({}, state, {
			 isOpenned: !state.isOpenned
		 })
		default:
			return state;
	}
}
