import React from "react"
import { NavLink } from "react-router-dom"

const GradientButton = () => {
	return (
		<div className="mt-3">
			<NavLink to="/gradient">
				<button className="btn btn-outline-dark w-100">Plein écran</button>
			</NavLink>
		</div>
	)
}

export default GradientButton
