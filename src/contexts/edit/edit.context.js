import React, { useReducer, useEffect, useContext } from "react";
import { useMemo } from "react";

import editReducer, { actions } from "./edit.reducer";

export const EditContext = React.createContext();

export function EditProvider({ children }) {
	const [state, dispatch] = useReducer(editReducer, { isNew: null, data: {} });

	const editContext = useMemo(() => [
		state,
		{
			updateField: (field, data) =>
				dispatch({ type: actions.UPDATE_FIELD, field, data }),
			setData: (data) => dispatch({ type: actions.SET_DATA, data }),
			init: (type, data) =>
				dispatch({
					type: type === "edit" ? actions.INIT_EDIT : actions.INIT_CREATE,
					data,
				}),
		},
	]);

	return (
		<EditContext.Provider value={editContext}>{children}</EditContext.Provider>
	);
}

export const useEdit = (type, init) => {
	const [state, dispatch] = useContext(EditContext);

	useEffect(() => {
		dispatch.init(type, init);
	}, []);

	return [state, dispatch];
};
