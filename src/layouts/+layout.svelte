<script>
	import Header from '$lib/+header.svelte';
	import Footer from '$lib/+footer.svelte';
	import '$lib/App.css';
	export let h1;
</script>


	<Header {h1} />
	<main>
		<slot><!-- optional fallback --></slot>
	</main>
	<Footer />


<style lang="scss">
	main{
		@apply tw-container;
	}
</style>
