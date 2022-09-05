<script>
	import Default from '../layouts/+layout.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	export let h1='Homepage';
</script>

<Default {h1}>
	{#each data.sections as section}
		<h2>{section.slug}</h2>
		<div>{section.title}</div>
	{/each}
</Default>