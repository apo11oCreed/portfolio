<script>
	import Default from '../../layouts/+default.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<Default>
	<h1>{data.heading.h1}</h1>
</Default>
<style lang="scss">
	
</style>