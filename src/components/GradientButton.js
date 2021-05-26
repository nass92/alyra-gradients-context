import React from "react"
import { NavLink } from "react-router-dom"

const GradientButton = () => {
	return (
		<div className="mt-3">
			<NavLink to="/pleinecran" className="nav-home" activeClassName="selected">
				<button className="btn btn-outline-dark w-100">Plein écran</button>
			</NavLink>
		</div>
	)
}

export default GradientButton
