<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<style>
		h1 {
			font-size: var(--fs-title);
			color: var(--text-color);
			margin: 0.3em 0 0 1.5rem;
		}

		.breadcrumbs {
			grid-column: 1 / 1;	
			grid-row: 2 / 2;
			margin: 0.3em 0 0 1.5rem;
		}

		.breadcrumbs a{
			color: white;
		}

		.breadcrumbs a[aria-current="true"]{
			color: #fffc86
		}

		img {
			border: 5px solid var(--text-color);
			border-radius: 15px;
			margin: 1em 1.5em;
			background-color: var(--text-color);
		}

		h2 {
			font-size: var(--fs-section);
			margin: 0 1.5rem 
		}

		.basic-card {
			outline: 3px solid var(--text-color);
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
			height: min-content;

			@media (min-width: 1200px){
				&:last-child:nth-child(odd) {
					grid-column: span 2;
				}
			}
		}

		.favo-card h3 {
			font-size: var(--fs-section);
		}

		.favo-card span {
			font-size: var(--fs-answer);
			color: var(--highlight-text);
			font-weight: var(--fw-semib);
			text-align: center;
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
				
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
				grid-template-rows: min-content min-content;
				
				@media (min-width: 1200px){
					grid-template-columns: repeat(2, minmax(350px, 1fr));
				}
			}

		}
	</style>
</svelte:head>



{@render children?.()}