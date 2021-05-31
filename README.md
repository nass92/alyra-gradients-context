# Projet Gradient 
netlify: 
Repo de départ: Gradient starter
Equipe: Sylvie, Victor, Gregory, Nassim

## Enoncer : 
 Dans ce projet, nous avons ciblé different objectifs: 
  - useReducer avec des actions FETCH_INIT FETCH_SUCCESS, FETCH_FAILURE,
  - les gradients sont récupérés via une API https://gradients-api.herokuapp.com
  - GradientsContext  pour appeler les données,
  -  la structure des routes, 
  - la navigation (Accueil, Précédent, Suivant) depuis routes /gradient/:id 

  ## GradientReducer : 

    const gradientReducer = (state, action) => {
	switch (action.type) {
		case "FETCH_INIT":
			return {
				...state,
				loading: true,
			}
		case "FETCH_SUCCESS":
			return {
				...state,
				loading: false,
				error: "",
				gradients: action.payload,
			}
		case "FETCH_FAILURE":
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		default:
			throw new Error(
				`Unsupported action type ${action.type} in gradientReducer`
			)
	}
}


  ## GradientContext : 

  Dans ce fichier nous avons commencé par créer le context et le Component Provider (GradientContext). 
    import { createContext, useReducer, useEffect } from "react";

    export const GradientContext = createContext();

    export const GradientContextProvider = ({ children }) => {

    return (
    <GradientContext.Provider value={{ state, dispatch }}>
      {!state.loaded ? <p>Loading...</p> : children}
    </GradientContext.Provider>
    );
    };
  
  
  Ensuite nous  avons ajouté au GradientContextProvider un useReducer, un useState, ainsi que le hook useIsMounted :
    const [state, dispatch] = useReducer(gradientReducer, {
		gradients: [],
		loading: true,
		error: "",
	})
	const [filter, setFilter] = useState("all")
	const { gradients, loading, error } = state
	const [card, setCard] = useState(gradients)
	const isMounted = useIsMounted()

Ensuite nous avons mis en place un useEffect : 

    useEffect(() => {
		fetch(url)
			.then((response) => {
				dispatch({ type: "FETCH_INIT" })
				if (!response.ok) {
					throw new Error(
						`Something went wrong with your fetch" : ${response.status}`
					)
				}
				return response.json()
			})
			.then((data) => {
				if (isMounted.current) {
					dispatch({ type: "FETCH_SUCCESS", payload: data })
				}
			})
			.catch((error) => {
				if (isMounted.current) {
					dispatch({ type: "FETCH_FAILURE", payload: error.message })
				}
			})
	}, [url, isMounted])


## Mise en Place des Routes
Tout d'abord, nous avons installer les dépendance react router dom 

yarn add react-router-dom

ensuite on les importe dans le fichier index.js : 
    import { BrowserRouter as Router } from 'react-router-dom'

Puis on met en places les différent routes : 
    

    ReactDOM.render(
        <React.StrictMode>
            <GradientContextProvider>
                <Router>
                    <Switch>
                        <Route exact path="/gradient/:id" component={GradientPage} />
                        <Route exact path="/" component={App} />
                        <App />
                    </Switch>
                </Router>
            </GradientContextProvider>
        </React.StrictMode>,
        document.getElementById("root")
    )

 ## FullGradient

 
### FULL Page


En cliquant sur le bouton "Plein Ecran", l'utilisateur sera redirigée vers une page affichant la couleur sélectionée. 

Cette page conporte différent fonctionnalités. Tout d'abord, il récupere l'identifiant "id" afin de récupérer la bon gradient à afficher. 

    const { gradients } = useGradient()
	const { id } = useParams()

Nous avons également trois boutons : 
- "Tous" => qui redirige l'utilisateur vers la liste des gradients.
								
- " précedent" => qui permet d'afficher la couleur précente. L'identification se fait grace à l'id. 

- "Suivant" => qui permet d'afficher la couleur suivante. L'identification se fait grace à l'id. 

Ces 3 boutons, sont englobé dans une balise Link :

     <NavLink
		to={`/gradient/${Number(id) - 1}`}
		type="button"
		className="btn btn-dark text-white nav-link me-2"
		>
			Previous
	 </NavLink>

### GradientText

En plus de ces boutons, l'utilisateur à acces au nom du gradients affichée, ainsi qu'au code linear. 

    <h1 className="text-white display-1">{gradients[id - 1]?.name}</h1>
        <div className="bg-white shadow p-2 rounded">{`background-image: linear-gradient(to right, ${
            gradients[id - 1]?.start
        }, ${gradients[id - 1]?.end})`}</div>

### GradientPageError. 

Les gradients sont identifié grace à l'id. Dans la gradient list, récuperer par l'api, nous avons 25 gradients soit 25 id. 
dans le navigateur, l'utilisateur peut modifier, sur l'url, le numéro de l'id afin d'afficher une autre couleur. 
Seulement, si l'utilisateur, indique un id non listé (ex: 50), alors une page, sous fond noir, s'affichera, 

    style={{
                backgroundColor: "black",
            }}

avec un message d'erreur. 

    <p className="text-white m-auto text-center">
					Oups, ce gradient n'existe pas
				</p>

 l'utilisateur aura toujours la possibilitée de revenir à la liste des gradients (page Home), grace aux bouton "Tous". 