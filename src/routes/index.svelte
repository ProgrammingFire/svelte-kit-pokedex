<script>
	import { pokemon, fetchData } from "../stores/pokemon";
	import Pokemon from "../components/pokemon.svelte";

	let searchTerm = "";
	let filteredPokemon = [];
	$: {
		if (searchTerm) {
			filteredPokemon = $pokemon.filter((pokeman) =>
				pokeman.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPokemon = [...$pokemon];
		}
	}
	fetchData();
</script>

<h1 class="text-4xl text-center my-8 uppercase">Welcome to Pokedex Made Using SvelteKit</h1>
<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	bind:value={searchTerm}
	placeholder="Search Pokemon"
/>
<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokemon as poke}
		<Pokemon pokeman={poke} />
	{/each}
</div>
