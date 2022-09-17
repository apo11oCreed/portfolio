<script>
	import { page } from '$app/stores';
</script>

<nav>
	<ul>
		<li>
			<a class:active={$page.url.pathname === '/'} href="/">Home</a>
		</li>
		<li>
			<a class:active={$page.url.pathname === '/portfolio'} href="/portfolio">Portfolio</a>
		</li>
		<li>
			<a class:active={$page.url.pathname === '/blog'} href="/blog">Blog</a>
		</li>
		<li>
			<a class:active={$page.url.pathname === '/contact'} href="/contact">Contact</a>
		</li>
	</ul>
</nav>

<style lang="scss">
	/*https://github.com/sveltejs/language-tools/issues/129*/
	nav {
		@apply tw-border-b;
		box-shadow: 0 1px 1px 0 rgba(0 0 0 / 0.05);
		ul {
			@apply tw-flex tw-justify-center;
			li {
				@apply tw-w-fit tw-leading-none tw-flex tw-justify-center tw-bg-transparent tw-text-black;
				transition: all 0.5s ease-in-out;
				&:hover {
					@apply tw-text-white;
					background-color: #25408f;
				}
				a {
					@apply tw-p-[2rem] tw-w-full tw-h-full tw-block;
					&.active {
						@apply tw-text-white;
						background-color: #25408f;
					}
				}
			}
		}
	}
</style>
