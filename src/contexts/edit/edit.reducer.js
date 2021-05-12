export const actions = {
	UPDATE_FIELD: Symbol("UPDATE_FIELD"),
	SET_DATA: Symbol("SET_DATA"),
	INIT_EDIT: Symbol("INIT_EDIT"),
	INIT_CREATE: Symbol("INIT_CREATE"),
};

export default (prevState, a) => {
	switch (a.type) {
		case actions.UPDATE_FIELD:
			return {
				...prevState,
				data: {
					...prevState.data,
					[a.field]: a.data,
				},
			};
		case actions.SET_DATA:
			return {
				...prevState,
				data: a.data,
			};
		case actions.INIT_EDIT:
			return {
				isNew: false,
				data: a.data || {},
			};
		case actions.INIT_CREATE:
			return {
				isNew: true,
				data: a.data || {},
			};
	}
};
