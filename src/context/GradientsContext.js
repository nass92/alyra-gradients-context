// src/context/FilterContext.js
import { createContext, useEffect, useReducer, useContext } from "react"
import axios from "axios"
import reducer from "../reducer/Reducer"

export const GradientContext = createContext()

export const GrandientContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, {
		gradients: [],
		loading: false,
		error: "",
	})

	const { gradients, loading, error } = state

	const url = "https://gradients-api.herokuapp.com/gradients"

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
				dispatch({ type: "FETCH_SUCCESS", payload: data })
			})
			.catch((error) => {
				dispatch({ type: "FETCH_FAILURE", payload: error.message })
			})
	}, [])

	return (
		<GradientContext.Provider value={{ gradients, loading }}>
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
