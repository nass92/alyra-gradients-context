import GradientsList from "./GradientsList"
import GradientsSelect from "./GradientsSelect"
import axios from "axios"
import reducer from "../reducer/Reducer"
import { useState, useEffect, useReducer } from "react"

const Gradients = () => {
	const [state, dispatch] = useReducer(reducer, {
		data: [],
		loading: false,
		error: "",
	})

	const { data, loading, error } = state
	useEffect(() => {
		const fetchData = async () => {
			dispatch({ type: "FETCH_INIT" })
			try {
				const result = await axios(
					"https://gradients-api.herokuapp.com/gradients"
				)
				console.log(result)
				dispatch({ type: "FETCH_SUCCESS", payload: result })
			} catch (error) {
				dispatch({ type: "FETCH_FAILURE", payload: error.message })
			}
		}

		fetchData()
	}, [])

	return (
		<>
			<GradientsSelect />
			<GradientsList />
		</>
	)
}

export default Gradients
