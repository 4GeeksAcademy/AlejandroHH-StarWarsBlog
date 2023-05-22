const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			planets: [],
			vehicles: [],
			character: {},
			planet: {},
			vehicle: {},
			favorite: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			loadCharacters: () => {
				fetch("https://www.swapi.tech/api/people")
				.then(response => response.json())
				.then((response) => {
					console.log(response)
					setStore({characters: response.results})
				})

			},
			loadPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
				.then(response => response.json())
				.then((response) => {
				//	console.log(response)
					setStore({planets: response.results})
				})
			},
			loadVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/")
				.then(response => response.json())
				.then((response) => {
				//	console.log(response)
					setStore({vehicles: response.results})
				})
			},
			loadDetails: async (id) => {
				const resp = await fetch(`https://www.swapi.tech/api/people/${id}`)
				const data = await resp.json()
				// console.log(data.result)
				setStore({character: data.result.properties});

				const planetResp = await fetch(`https://www.swapi.tech/api/planets/${id}`)
				const planetData = await planetResp.json()

				setStore({planet: planetData.result.properties})

				const vehicleResp = await fetch(`https://www.swapi.tech/api/vehicles/${id}`)
				const vehicleData = await vehicleResp.json()

				setStore({vehicle: vehicleData.result.properties});

			},
			setFavorites: data => {
				const store = getStore();
				console.log([...store.favorite, data])
				setStore({ favorite: [...store.favorite, data] });
			},
			deleteFavorites: data => {
				
			}
			
			
		}
	};
};

export default getState;
