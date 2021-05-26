import Gradients from "./components/Gradients"
import GradientsHeader from "./components/GradientsHeader"
import Footer from "./components/Footer"
import { FilterContextProvider } from "./context/FilterContext"

function App() {
	return (
		<>
			<GradientsHeader>
				<h1 className="display-1">Alyra Gradients</h1>
				<p className="tagline">Ultime collection des plus beaux dégradés</p>
			</GradientsHeader>
			<main className="container min-vh-100">
				<h1 className="text-center my-4">Alyra Gradients</h1>
				<FilterContextProvider>
					<Gradients />
				</FilterContextProvider>
			</main>
			<Footer />
		</>
	)
}

export default App
