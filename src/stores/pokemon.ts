import { writable } from "svelte/store";

export type Pokemon = { id: number; name: string; url: string; image: string };

export const fetchData = async () => {
	const url = "https://pokeapi.co/api/v2/pokemon?limit=150";
	const res = await fetch(url);
	const data = await res.json();
	const loadedPokemon = data.results.map((poke, idx) => {
		return {
			id: idx + 1,
			name: poke.name,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				idx + 1
			}.png`,
			url: poke.url
		};
	});
	pokemon.set(loadedPokemon);
};

export const pokemon = writable([]);

fetchData();
