<script>
	import Layout from '../layouts/+layout.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<Layout>
	{#each data.sections as section}
		<h1>{section.slug}</h1>
		<div>{section.title}</div>
	{/each}
</Layout>
