import Gradients from "./components/Gradients"
import GradientsHeader from "./components/GradientsHeader"
import Footer from "./components/Footer"
import { FilterContextProvider } from "./context/FilterContext"
import { GradientContext } from "./context/GradientContext"
import axios from "axios"
import reducer from "./reducer/Reducer"
import { useEffect, useReducer } from "react"

function App() {
	const [state, dispatch] = useReducer(reducer, {
		gradients: [],
		loading: false,
		error: "",
	})

	const { gradients, loading, error } = state
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
			<GradientContext.Provider value={dispatch}>
				<GradientsHeader>
					<h1 className="display-1">Alyra Gradients</h1>
					<p className="tagline">Ultime collection des plus beaux dégradés</p>
				</GradientsHeader>
				<main className="container">
					<h1 className="text-center my-4">Alyra Gradients</h1>
					<FilterContextProvider>
						<Gradients />
					</FilterContextProvider>
				</main>
			</GradientContext.Provider>
			<Footer />
		</>
	)
}

export default App
