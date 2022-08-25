<script>
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';
	import '$lib/App.css';
</script>


	<Nav />
	<main>
		<slot><!-- optional fallback --></slot>
	</main>
	<Footer />


<style lang="scss">
	main{
		@apply tw-container tw-mx-auto;
	}
</style>
