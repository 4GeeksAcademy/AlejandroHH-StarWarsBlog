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
			character: {},
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
			loadCharacters: (id) => {
				fetch("https://www.swapi.tech/api/people")
				.then(response => response.json())
				.then((response) => {
					console.log(response)
					setStore({characters: response.results})
				})

			},
			loadPlanets: (id) => {
				fetch("https://www.swapi.tech/api/planets/")
				.then(response => response.json())
				.then((response) => {
				//	console.log(response)
					setStore({planets: response.results})
				})
			},
			loadDetails: async (id) => {
				const resp = await fetch(`https://www.swapi.tech/api/people/${id}`)
				const data = await resp.json()
				// console.log(data.result)
				setStore({character: data.result.properties})
				


			},
			
			
		}
	};
};

export default getState;
