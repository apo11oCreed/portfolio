<script>
	import Header from '$lib/+Header.svelte';
	import Footer from '$lib/Footer.svelte';
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
