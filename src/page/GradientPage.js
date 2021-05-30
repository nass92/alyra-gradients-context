import React from "react"
import { NavLink, useParams } from "react-router-dom"
import { useGradient } from "../context/GradientsContext"
import GradientText from "./GradientText"

const GradientPage = () => {
	const { gradients } = useGradient()
	const { id } = useParams()

	return (
		<div>
			<div
				className="flex-fill d-flex "
				style={{
					backgroundImage: `linear-gradient(to right, ${
						gradients[id - 1]?.start
					}, ${gradients[id - 1]?.end})`,
				}}
			>
				<nav className="fixed-top nav">
					<li className="nav-item">
						<NavLink
							to="/"
							type="button"
							className="btn btn-dark text-white nav-link me-2"
						>
							Tous
						</NavLink>
					</li>
					{id > 1 ? (
						<li className="nav-item">
							<NavLink
								to={`/gradient/${Number(id) - 1}`}
								type="button"
								className="btn btn-dark text-white nav-link me-2"
							>
								Précédent
							</NavLink>
						</li>
					) : (
						""
					)}
					{id < 25 ? (
						<li className="nav-item">
							<NavLink
								to={`/gradient/${Number(id) + 1}`}
								type="button"
								className="btn btn-dark text-white nav-link me-2"
							>
								Suivant
							</NavLink>
						</li>
					) : (
						""
					)}
				</nav>
				<GradientText />
			</div>

			<footer className="text-center text-white bg-dark p-3 mt-auto">
				Made with <span className="text-danger">&hearts;</span>
				<span className="text-warning">&hearts;</span>
				<span className="text-primary">&hearts;</span>
				<span className="text-success">&hearts;</span> & React by Nassim,
				Grégory, Victor & Sylvie for Alyra White Team
			</footer>
		</div>
	)
}

export default GradientPage
