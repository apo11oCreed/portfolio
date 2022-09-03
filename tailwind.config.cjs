/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				blue: {
					hex: '#25408f'
				},
				orange: {
					hex: '#c26f1f'
				}
			},
			font:{
				default: '\'Ubuntu\', sans-serif',
				condensed:'\'Ubuntu Condensed\', sans-serif',
				mono: '\'Ubuntu Mono\', monospace'
			},
			fontSize: {
				xs: '0.5rem',
				md: '1.6rem',
				lg: '3.2rem'
			}
		}
	},
	prefix: 'tw-',
	plugins: []
};
