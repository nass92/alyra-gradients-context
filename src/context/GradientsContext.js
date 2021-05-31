// src/context/FilterContext.js
import {
	createContext,
	useEffect,
	useReducer,
	useContext,
	useState,
} from "react"
import { useIsMounted } from "../hook/useIsMounted"
import gradientReducer from "../reducers/gradientReducer"

export const GradientContext = createContext()

export const GradientContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(gradientReducer, {
		gradients: [],
		loading: true,
		error: "",
	})
	const [filter, setFilter] = useState("all")
	const { gradients, loading, error } = state
	const isMounted = useIsMounted()
	const url = `https://gradients-api.herokuapp.com/gradients`

	useEffect(() => {
		fetch(url)
			.then((response) => {
				dispatch({ type: "FETCH_INIT" })
				if (!response.ok) {
					throw new Error(
						`Something went wrong with your fetch" : ${response.status}`
					)
				}
				return response.json()
			})
			.then((data) => {
				if (isMounted.current) {
					dispatch({ type: "FETCH_SUCCESS", payload: data })
				}
			})
			.catch((error) => {
				if (isMounted.current) {
					dispatch({ type: "FETCH_FAILURE", payload: error.message })
				}
			})
	}, [url, isMounted])

	return (
		<GradientContext.Provider
			value={{
				gradients,
				loading,
				filter,
				setFilter,
				error,
			}}
		>
			{children}
		</GradientContext.Provider>
	)
}

export const useGradient = () => {
	const context = useContext(GradientContext)
	if (context === undefined) {
		throw new Error(
			"It seems that you are trying to use GradientContext outside of its provider"
		)
	}
	return context
}
