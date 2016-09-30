export const TOOGLE_MENU = 'TOOGLE_MENU';

export function toogleMenu(id) {
  console.log('Request: ', toogleMenu);

  return {
		type: TOOGLE_MENU,
    id
	};
}
