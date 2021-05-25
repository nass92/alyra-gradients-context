const reducer = (state, action) => {
	switch (action.type) {
		case "FETCH_INIT":
			return {
				...state,
				loading: true,
			}
		case "FETCH_SUCCESS":
			return {
				...state,
				loading: false,
				error: "",
				data: action.payload.data,
			}
		case "FETCH_FAILURE":
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		default:
			throw new Error(`unsupported action type ${action.type}`)
	}
}

export default reducer
