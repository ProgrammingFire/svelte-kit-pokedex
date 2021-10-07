<script context="module">
	export async function load({ page }) {
		const id = page.params.id;
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		const data = await res.json();
		const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
		return { props: { pokemon: data, image } };
	}
</script>

<script>
	export let pokemon;
	export let image;
</script>

<main>
	<a href="/">Back</a>
	<img src={image} alt="" />
	{pokemon.name}
	<hr />
	<ul>
		{#each pokemon.abilities as a}
			<li>{a.ability.name}</li>
		{/each}
	</ul>
</main>
