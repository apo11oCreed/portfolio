<script>
	import { page } from "$app/stores";
</script>
<nav>
	<ul>
		<li>
			<a
			class:active={$page.url.pathname === '/'}
				href="/">Home</a
			>
		</li>
		<li>
			<a
			class:active={$page.url.pathname === '/portfolio'}
				href="/portfolio">Portfolio</a
			>
		</li>
		<li>
			<a
			class:active={$page.url.pathname === '/blog'}
				href="/blog">Blog</a
			>
		</li>
		<li>
			<a
			class:active={$page.url.pathname === '/contact'}
				href="/contact">Contact</a
			>
		</li>
	</ul>
</nav>

<style lang="scss">
	/*https://github.com/sveltejs/language-tools/issues/129*/
	nav {
		@apply tw-border-b tw-border-black;
		ul {
			@apply tw-flex tw-justify-evenly;

			li {
				@apply tw-leading-none tw-flex tw-justify-center tw-w-full;
				transition: all 0.5s ease-in-out;
				background-color: transparent;
				color: black;
				&:hover {
					background-color: #25408f;
					color: white;
				}
				a {
					@apply tw-p-[2rem];
					width: 100%;
					height: 100%;
					display: block;
					&.active {
						background-color: #ff3e00;
						color: white;
					}
				}
			}
		}
	}
</style>
