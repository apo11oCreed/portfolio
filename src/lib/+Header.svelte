<script>
	import Nav from '$lib/+nav.svelte';
  export let h1;
</script>

<header>
	<Nav />
	<!-- https://github.com/sveltejs/language-tools/issues/129*/ -->
	<h1>{h1}</h1>
</header>
