export const actions = {
	UPDATE_ITEM: Symbol("UPDATE_ITEM"),
	DELETE_ITEM: Symbol("DELETE_ITEM"),
	CREATE_ITEM: Symbol("CREATE_ITEM"),
	SET_DATA: Symbol("SET_DATA"),
	RESET: Symbol("RESET"),
};

export default (prevState, a) => {
	switch (a.type) {
		case actions.UPDATE_ITEM:
			return {
				...prevState,
				[a.field]: {
					...prevState[a.field],
					data: prevState[a.field].data.map((i) =>
						a.item === i.id ? a.data : i,
					),
				},
			};
		case actions.CREATE_ITEM:
			return {
				...prevState,
				[a.field]: {
					...prevState[a.field],
					data: [...prevState[a.field].data, a.data],
				},
			};
		case actions.DELETE_ITEM:
			return {
				...prevState,
				[a.field]: {
					...prevState[a.field],
					data: prevState[a.field].data.filter((i) =>
						a.item === i.id ? false : true,
					),
				},
			};
		case actions.SET_DATA:
			return {
				...prevState,
				[a.field]: a.data,
			};
		case actions.RESET:
			return {};
	}
};
