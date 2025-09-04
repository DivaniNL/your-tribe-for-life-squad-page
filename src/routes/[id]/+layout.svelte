<script>
	import favicon from '$lib/assets/favicon.svg';
    import { redirect, text } from '@sveltejs/kit';
    import { nonpassive } from 'svelte/legacy';
    import { normalizeModuleId } from 'vite/module-runner';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<style>
		h1 {
			font-size: var(--fs-title);
			color: var(--text-color);
			margin: 0 0 0 1.5rem;
		}

		img {
			border: 5px solid var(--text-color);
			border-radius: 15px;
			margin: 0 1.5em;
			background-color: var(--text-color);
		}

		h2 {
			font-size: var(--fs-section);
			margin: 0 1.5rem 
		}

		.basic-card {
			border: 3px solid var(--text-color);
			box-shadow: 7px 7px 0 var(--text-color);
			border-radius: 15px;
			margin: 1.5em calc(1em + 10px) 1.5em 1em;
			padding: 1em;
		}

		.section-bio h3 {
			font-size: var(--fs-section);
		}

		.section-bio p {
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 10;
			overflow: hidden;
		}

		.user-links {
			display: grid;
			grid-template-areas:
			"title  title"
			"git web";
			height: 6em;
		}

		.user-links h3 {
			grid-area: title;
		}

		.user-links a {
			text-decoration: none;
			color: var(--text-color);
			padding: 0.5em;
			border-radius: 15px;
			width: min-content;
			height: min-content;
		}

		.user-links a:hover {
			background-color: var(--text-color);
			color: var(--bg-dark);
		}

		.favo-card {
			display: flex;
			flex-direction: column;
			align-items: center;
			list-style: none;
		}

		.favo-card h3 {
			font-size: var(--fs-section);
		}

		.favo-card span {
			font-size: var(--fs-answer);
			color: var(--highlight-text);
			font-weight: var(--fw-semib);
		}
		@media (min-width: 750px){
			.grid-wrapper{
				display: grid;
				grid-template-columns: 1fr 1fr;
			}
			h1, img, h2, .info-container{
				grid-column: 1/1
			}
			.favo-slider{
				grid-row: 2 / 6;
    			grid-column: 2 / 2;
			}

		}

	</style>
</svelte:head>



{@render children?.()}