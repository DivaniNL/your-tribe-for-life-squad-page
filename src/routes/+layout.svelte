<script>
    // import { COLOR } from "$env/static/private"; mag niet? geeft me error
    import favicon from "$lib/assets/favicon.svg";
    import { onNavigate } from "$app/navigation";

    let { children } = $props();

    onNavigate((navigation) => {
        if (!document.startViewTransition) return;
        let viewTransitionType = "page-change";
        if (navigation.type === "goto") {
            return;
        }
        return new Promise((resolve) => {
            document.startViewTransition({
                update: async () => {
                    resolve();
                    await navigation.complete;
                },
                types: [viewTransitionType],
            });
        });
    });
</script>

<svelte:head>
    <link rel="icon" href={favicon}>
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

        /*reset*/
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            object-fit: cover;
            font-family: "MontserratAlternates", sans-serif;
        }

        html {
            background-color: #050542;
            color: #66e5bf;
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
            --fs-small: 0.8rem;
            --fs-reg: 1rem;
            --fs-answer: 1.75rem;
            --fs-section: 2rem;
            --fs-title: 3.375rem;

            font-family: "MontserratAlternates";
            font-weight: var(--fw-reg);

            overflow-x: hidden;
            /*fixed animations scrollbar*/
        }

        section {
            margin-top: 5em;
        }

        body {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        ul.filters {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            row-gap: 20px;

            border-radius: 15px;
            padding: 20px;
            background-color: #66e5bf;
            list-style-type: none;

            transform: scale(0);
            transition: 0.2s ease;
            height: 0;
            opacity: 0;

            @media (min-width: 550px) {
                display: flex;
                justify-content: center;
                gap: 50px;
                
                margin: 0 auto;
                padding: 20px 50px;
                width: fit-content;
                
            }
            
        }

        @media (min-width: 690px) {
            ul.filters {
                opacity: 1;
                display: flex;
                gap: 50px;
                justify-content: center;
                padding: 20px 50px;
                width: fit-content;
                margin: 20px;
                transform: scale(1);
                padding: 20px;
                height: fit-content !important;
            }
        }

        #toggle-filter {
            appearance: none;
            margin-top: 10px;
        }
        #toggle-filter,
        #toggle-filter + label {
            display: block;
            cursor: pointer;
        }
        #toggle-filter + label {
            background-color: #66e5bf;
            color: #050542;
            padding: 10px 40px;
            font-weight: bold;
            border-radius: 15px;
            border-radius: 10px;

            box-shadow: 0 7px #ececec;
            &:hover,
            &:focus {
                box-shadow: 0 3px #ececec;
                transform: translateY(4px);
            }
        }
        @media (min-width: 690px) {
            #toggle-filter,
            #toggle-filter + label {
                display: none;
            }
        }
        body:has(#toggle-filter:checked) ul.filters {
            transform: scale(1);
            height: 220px;
            padding: 20px;
            margin: 20px;
            opacity: 1;
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
            border-radius: 10px;

            box-shadow: 0 7px #ececec;
            &:hover,
            &:focus {
                box-shadow: 0 3px #ececec;
                transform: translateY(4px);
            }
        }

        ul.filters li a svg {
            height: 32px;
            fill: #ececec;
        }

        ul.filters li a p {
            margin-bottom: 0;
            margin-top: 10px;
        }

        ul.filters svg > * {
            fill: #ececec;
        }

        ul.filters li a[aria-current="true"] svg,
        ul.filters li a[aria-current="true"] svg > * {
            fill: #fffc86;
        }

        ul.filters li a[aria-current="true"] div {
            box-shadow: 0 7px #fffc86;
            &:hover,
            &:focus {
                box-shadow: 0 3px #fffc86;
                transform: translateY(4px);
            }
        }

        .removefilter {
            text-decoration: underline;
            color: white;
            font-size: 18px;
            text-align: center;
            display: block;
            margin: 20px auto 0;
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
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -1;
        }

        /* animations */
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
            display: flex;
            flex-direction: row;
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

        @media (prefers-reduced-motion: reduce) {
            .slider {
                animation: scroll 100s linear infinite;
            }
        }

        .person-card {
            position: relative;
            height: 10em;
            width: 12em;

            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            padding: 1em;
            color: #fff;

            &:hover {
                cursor: pointer;
                position: relative;

                .info-dialog {
                    opacity: 1;
                }

                &:after {
                    content: "";
                    position: absolute;
                    background-color: rgba(0, 0, 0, 0.6);
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    z-index: 1;
                }

                img {
                    opacity: 1;
                }
            }
        }

        @media (min-width: 750px) {
            .person-card {
                height: 18em;
                width: 22em;

                transition: all;
            }
        }

        .person-card span {
            background-color: #050542;
            color: #66e5bf;

            width: fit-content;
            padding: 0.2em 0.5em;
            border-radius: 5px;
            font-weight: bold;

            position: absolute;
            top: 0.5em;
            left: 0.5em;
            z-index: 2;
        }

        .info-dialog {
            z-index: 2;
            opacity: 0;
        }

        .info-dialog h3 {
            font-size: 1em;
        }

        .member-bio {
            margin: 0.5em 0;

            font-size: 0.8em;
            width: 99%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        .links {
            display: flex;
            justify-content: space-between;

            a {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            p {
                font-size: 0.6em;
            }
        }

        a {
            color: inherit;
            text-decoration: none;

            div {
                height: 2em;
                width: auto;

                display: flex;
                justify-content: center;
                align-items: center;

                svg {
                    height: 100%;
                    width: auto;
                    fill: #ececec;
                }
            }

            &:hover {
                text-decoration: underline;

                div {
                    svg {
                        * {
                            fill: #fffc86;
                        }
                    }
                }
            }
        }

        .person-card img {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            background-position: 50% 50%;
        }

        .person-card a {
            z-index: 999;
        }

        @media (min-width: 700px) {
            .info-dialog h3 {
                font-size: 1.2em;
            }

            .member-bio {
                margin: 0.2em 0;
                font-size: 1em;
            }
        }

        .person-card a {
            z-index: 999;
        }
        .removefilter {
            text-decoration: underline;
            color: white;
            font-size: 18px;
            text-align: center;
            display: block;
            margin: 20px auto 0;
        }

        @keyframes fade-in-translate {
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        @media (prefers-reduced-motion: no-preference) {
            .animation-slide-in--up {
                transform: translateY(100px);
                opacity: 0;
                animation: 0.3s fade-in-translate var(--delay) ease-out forwards;
            }
        }

        /* view transition */
        @media (prefers-reduced-motion: no-preference) {
            @view-transition {
                navigation: auto;
            }

            @keyframes scale-out {
                to {
                    scale: 0;
                }
            }

            @keyframes fade-in {
                to {
                    opacity: 1;
                }
            }

            ::view-transition-old(.animation-scale-out) {
                animation: scale-out 1s ease forwards;
            }

            ::view-transition-new(.animation-fade-in) {
                animation: fade-in 1s ease forwards;
            }

            ::view-transition-group(*) {
                animation-duration: 1.3s;
                animation-timing-function: linear(
                    0, 0.009, 0.035 2.1%, 0.141, 0.281 6.7%, 0.723 12.9%,
                    0.938 16.7%, 1.017, 1.077, 1.121, 1.149 24.3%, 1.159,
                    1.163, 1.161, 1.154 29.9%, 1.129 32.8%, 1.051 39.6%,
                    1.017 43.1%, 0.991, 0.977 51%, 0.974 53.8%, 0.975 57.1%,
                    0.997 69.8%, 1.003 76.9%, 1.004 83.8%,1
                );
            }
        }
    </style>
</svelte:head>

<main>
    {@render children?.()}
</main>