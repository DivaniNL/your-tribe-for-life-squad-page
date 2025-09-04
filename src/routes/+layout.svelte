<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<style>
		/* RESET */
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
			object-fit: cover;
		}

		body {
			/* colors */
			--bg-dark: #050542;
			--bg-gray: #ECECEC;
			--text-color: #66E5BF;
			--highlight-text: #A675F5;
			--active-btn: #FFFC86;

			/* font weight */
			--fw-reg: 400;
			--fw-semib: 600;

			/* font size */
			--fs-reg: 1rem;
			--fs-answer: 2.25rem;
			--fs-section: 3rem;
			--fs-title: 3.375rem;
		}

		@font-face {
			font-family: 'MontserratAlternates';
			src: url('/fonts/MontserratAlternates-Regular.ttf') format('truetype');
			font-weight: 400;
			font-style: normal;
			font-display: swap;
		}

		@font-face {
			font-family: 'MontserratAlternates';
			src: url('/fonts/MontserratAlternates-SemiBold.ttf') format('truetype');
			font-weight: 600;
			font-style: normal;
			font-display: swap;
		}
	</style>
</svelte:head>



{@render children?.()}


