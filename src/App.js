import Gradients from "./components/Gradients"
import GradientsHeader from "./components/GradientsHeader"
import Footer from "./components/Footer"

function App() {
	return (
		<div>
			<GradientsHeader>
				<h1 className="display-1">Alyra Gradients</h1>
				<p className="tagline">Ultime collection des plus beaux dégradés</p>
			</GradientsHeader>
			<main>
				<h1 className="text-center my-4">Alyra Gradients</h1>
				<Gradients />
			</main>
			<Footer />
		</div>
	)
}

export default App
