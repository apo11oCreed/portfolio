<script>
</script>

<nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/portfolio">Portfolio</a></li>
		<li><a href="/blog">Blog</a></li>
		<li><a href="/contact">Contact</a></li>
	</ul>
</nav>

<style lang='scss'>
	/*https://github.com/sveltejs/language-tools/issues/129*/
	nav {
		@apply tw-border-b tw-border-black;
		ul {
			@apply tw-flex tw-justify-evenly;

			li {
				@apply tw-leading-none tw-flex tw-justify-center tw-w-full tw-p-[2rem];
				transition: all 0.5s ease-in-out;
				background-color: transparent;
				color: black;
				&:hover {
					background-color: #25408f;
					color: white;
				}
			}
		}
	}
</style>
