<script>
	import Default from '../layouts/+default.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<Default>
	<h1>{data.heading.h1}</h1>
	{#each data.sections as section}
		<h2>{section.slug}</h2>
		<div>{section.title}</div>
	{/each}
</Default>
<style lang="scss">
	
</style>