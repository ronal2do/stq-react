export function selectBook(slug) {
	// Select book is an ActionCreator, it needs to return ab action,
	// an object with a type property
	return {
		type: 'JOB_SELECTED',
		payload: slug
	};

}
