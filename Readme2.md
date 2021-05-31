### FULL Page


En cliquant sur le boutton "Plein Ecran", l'utilisateur sera redirigée vers une page affichant la couleur sélectionée. 

Cette page conporte différent fonctionnalités. Tout d'abord, il récupere l'identifiant "id" afin de récupérer la bon gradient à afficher. 

    const { gradients } = useGradient()
	const { id } = useParams()

Nous avons également trois bouttons : 
- "Tous" => qui redirige l'utilisateur vers la liste des gradients.
    <NavLink
                to="/"
                type="button"
                className="btn btn-dark text-white nav-link me-2"
            >
                Home
    </NavLink>

								
- " précedent" => qui permet d'afficher la couleur précente. L'identification se fait grace à l'id. 

    <NavLink
                to={`/gradient/${Number(id) - 1}`}
                type="button"
                className="btn btn-dark text-white nav-link me-2"
            >
                Previous
    </NavLink>


- "Suivant" => qui permet d'afficher la couleur suivante. L'identification se fait grace à l'id. 

    <NavLink
            to={`/gradient/${Number(id) + 1}`}
            type="button"
            className="btn btn-dark text-white nav-link me-2"
        >
            Next
    </NavLink>

### GradientText

En plus de ces bouttons, l'utilisateur à acces au nom du gradients affichée, ainsi qu'au code linear. 

    <h1 className="text-white display-1">{gradients[id - 1]?.name}</h1>
        <div className="bg-white shadow p-2 rounded">{`background-image: linear-gradient(to right, ${
            gradients[id - 1]?.start
        }, ${gradients[id - 1]?.end})`}</div>

### GradientPageError. 

Les gradients sont identifier grace à l'id. Dans la gradient list, récuperer par l'api, nous avons 25 gradients soit 25 id. 
dans le navigateur, l'utilisateur peut modifier, sur l'url, le numéro de l'id afin d'afficher une autre couleur. 
Seulement, si l'utilisateur, indique un id non listé (ex: 50), alors une page, sous fond noir, 
    style={{
                backgroundColor: "black",
            }}
avec un message d'erreur, 
    <p className="text-white m-auto text-center">
					Oups, ce gradient n'existe pas
				</p>

s'affichera. l'utilistauer aura toujour la possibilitée de revnir a la liste des gradient (page Home), grace aux boutton Tous. 