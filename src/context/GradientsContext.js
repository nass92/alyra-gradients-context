// src/context/FilterContext.js
import { createContext, useContext } from "react"

// créer et exporter ("named") FilterContext object
export const GradientsContext = createContext()

/* le component-provider qui embrassera la partie de notre app où on utilise ce context */

export const useGradient = () => {
	const context = useContext(GradientsContext)
	if (context === undefined) {
		throw new Error(
			"It seems that you are trying to use FilterContext outside of its provider"
		)
	}
	return context
}
