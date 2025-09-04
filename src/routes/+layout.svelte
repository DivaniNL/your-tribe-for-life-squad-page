<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<style>
  
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
  
	ul.filters{
  border-radius: 15px;
  padding: 20px;
  row-gap: 20px;
  background-color: #66E5BF;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  list-style-type: none;
  @media (min-width: 550px){
    display: flex;
    gap: 50px;
    justify-content: center;
    padding: 20px 50px;
    width: fit-content;
    margin: 0 auto;
  }
}
ul.filters li{
  max-width: 120px;
}
ul.filters li, ul.filters li a{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
ul.filters li a{
  text-decoration: none;
  color: #050542;
  font-weight: bold;
}
ul.filters li a div{
  width: 50px;
  height: 50px;
  background-color: #050542;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
ul.filters li a svg{
  height: 32px;
  fill: #ECECEC;
}
ul.filters li a p{
  margin-bottom: 0;
}
ul.filters svg > *{
  fill: #ECECEC;
}
ul.filters li a[aria-current="true"] svg, ul.filters li a[aria-current="true"] svg > *{
  fill: #fffc86;
}
ul.slider{
  width: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.person-card {
  position: relative;
  max-height: 30em;
  width: 30em;
  overflow: hidden; /* voorkomt dat img buiten de card steekt */

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  color: white;
}

.person-card img {
  position: absolute;
  inset: 0; /* top:0; right:0; bottom:0; left:0 */
  width: 100%;
  height: 100%;
  object-fit: cover; /* zorgt dat de foto het vak mooi opvult */
  z-index: -1; /* achter de content */
}
</style>

</svelte:head>



{@render children?.()}


