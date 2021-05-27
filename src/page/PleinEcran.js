import { NavLink, useParams } from "react-router-dom"
import { useGradient } from "../context/GradientsContext"
import { gradients } from "../gradients"

const PleinEcran = () => {
	const params = useParams()
	const { id } = params

	return (
		<>
			<>
				<h2>Product with id: </h2>
			</>
			<NavLink to="/">
				<button type="button" className="btn btn-dark">
					Tous
				</button>
			</NavLink>
			<NavLink to="">
				<button type="button" className="btn btn-dark ms-2">
					Suivant
				</button>
			</NavLink>
			<button type="button" className="btn btn-dark ms-2">
				Précédent
			</button>
		</>
	)
}

export default PleinEcran
