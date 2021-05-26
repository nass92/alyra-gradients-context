import GradientsList from "./GradientsList"
import GradientsSelect from "./GradientsSelect"
import axios from "axios"
import reducer from "../reducer/Reducer"
import { useEffect, useReducer } from "react"

const Gradients = () => {
	/*	const [state, dispatch] = useReducer(reducer, {
		gradients: [],
		loading: false,
		error: "",
	})

	const { gradients, loading, error } = state
	const url = "https://gradients-api.herokuapp.com/gradients/:id"

	useEffect(() => {
		const fetchData = async () => {
			dispatch({ type: "FETCH_INIT" })
			try {
				const result = await axios(url)
				dispatch({
					type: "FETCH_SUCCESS",
					payload: result.gradient.gradients.id,
				})
			} catch (error) {
				dispatch({ type: "FETCH_FAILURE", payload: error.message })
			}
		}
		fetchData()
	}, [])
	*/
	return (
		<>
			<GradientsSelect />
			<GradientsList />
		</>
	)
}

export default Gradients
