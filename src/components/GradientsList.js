import Gradient from "./Gradient"
import { useGradient } from "../context/GradientsContext"

const GradientsList = () => {
	const { gradients, filter } = useGradient()
	const list = gradients.filter((el) => {
		if (filter === "all") {
			return true
		}
		return el.tags.includes(filter)
	})
	return (
		<ul className="row list-unstyled">
			{list.map((el) => {
				const { name, start, end, tags, id = [] } = el
				return (
					<Gradient
						key={id}
						id={id}
						colorStart={start}
						colorEnd={end}
						name={name}
						tags={tags}
					/>
				)
			})}
		</ul>
	)
}

export default GradientsList
