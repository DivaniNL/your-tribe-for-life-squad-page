<script>
  // import { COLOR } from "$env/static/private"; mag niet? geeft me error
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>



<svelte:head>
  <link rel="icon" href={favicon} />
  <style>
    @font-face {
      font-family: "MontserratAlternates";
      src: url("/fonts/MontserratAlternates-Regular.ttf") format("truetype");
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: "MontserratAlternates";
      src: url("/fonts/MontserratAlternates-SemiBold.ttf") format("truetype");
      font-weight: 600;
      font-style: normal;
      font-display: swap;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      object-fit: cover;
      font-family: "MontserratAlternates", sans-serif;
    }

    body {
      /* colors */
      --bg-dark: #050542;
      --bg-gray: #ececec;
      --text-color: #66e5bf;
      --highlight-text: #a675f5;
      --active-btn: #fffc86;

      /* font weight */
      --fw-reg: 400;
      --fw-semib: 600;

      /* font size */
      --fs-reg: 1rem;
      --fs-answer: 2.25rem;
      --fs-section: 3rem;
      --fs-title: 3.375rem;
    }

    /*filters*/
    ul.filters {
      border-radius: 15px;
      padding: 20px;
      row-gap: 20px;
      background-color: #66e5bf;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      list-style-type: none;
      @media (min-width: 550px) {
        display: flex;
        gap: 50px;
        justify-content: center;
        padding: 20px 50px;
        width: fit-content;
        margin: 0 auto;
      }
    }

    ul.filters li {
      max-width: 120px;
    }
    ul.filters li,
    ul.filters li a {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
    ul.filters li a {
      text-decoration: none;
      color: #050542;
      font-weight: bold;
    }
    ul.filters li a div {
      width: 50px;
      height: 50px;
      background-color: #050542;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    }
    ul.filters li a svg {
      height: 32px;
      fill: #ececec;
    }
    ul.filters li a p {
      margin-bottom: 0;
    }
    ul.filters svg > * {
      fill: #ececec;
    }
    ul.filters li a[aria-current="true"] svg,
    ul.filters li a[aria-current="true"] svg > * {
      fill: #fffc86;
    }
    /* animation */
    @keyframes scroll {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }

    /* member slider */
    .contain {
      width: 100vw;
      overflow: hidden;
    }

    .contain:nth-of-type(2) .slider {
      animation-direction: reverse;
    }

    .slider {
      display: flex;
      flex-flow: row nowrap;
      width: max-content;
      animation: scroll 55s linear infinite;

      &:hover {
        animation-play-state: paused;
      }
    }

    @media (prefers-reduced-motion: reduce){
      .slider {
        animation: scroll 100s linear infinite;
      }
    }

    .person-card {
      position: relative;
      height: 17em;
      width: 22em;

      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 1rem;
      color: white;

      &:hover {
        cursor:pointer;
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 1) 12%,
          rgba(117, 117, 117, 1) 100%
        );

        img {
          opacity: 0.2;
        }
      }

      *{
        margin-bottom:0.5em;
      }
    }

    .person-card span{
      background-color:#050542;
      color:#66e5bf;

      width:fit-content;
      padding: 0.2em 0.5em;
      border-radius:5px;
      font-weight:bold;

      position:absolute;
      top:0.5em;
      left:0.5em;
    }

    .person-card img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-position: 50% 50%;
    }

    .person-card p {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .person-card a{
      z-index:999;
    }
  </style>
</svelte:head>

{@render children?.()}
