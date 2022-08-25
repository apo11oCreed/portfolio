<script>
	import Nav from '$lib/Nav.svelte';
	import '$lib/App.css';
</script>


	<Nav />
	<main>
		<slot><!-- optional fallback --></slot>
	</main>
	


<style lang="scss">
	main{
		@apply tw-container tw-mx-auto;
	}
</style>
