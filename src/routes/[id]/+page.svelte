<script>
	let { data } = $props();
    const member = data.member;
    const filters = data.allowedFilters;
    const countryNamesNL = {
  AFG: "Afghanistan",
  ALB: "Albanië",
  DZA: "Algerije",
  AGO: "Angola",
  ATA: "Antarctica",
  ARG: "Argentinië",
  ARM: "Armenië",
  AUS: "Australië",
  AUT: "Oostenrijk",
  AZE: "Azerbeidzjan",
  BGD: "Bangladesh",
  BLR: "Wit-Rusland",
  BEL: "België",
  BLZ: "Belize",
  BEN: "Benin",
  BTN: "Bhutan",
  BOL: "Bolivia",
  BIH: "Bosnië en Herzegovina",
  BWA: "Botswana",
  BRA: "Brazilië",
  BRN: "Brunei",
  BGR: "Bulgarije",
  BFA: "Burkina Faso",
  BDI: "Burundi",
  KHM: "Cambodja",
  CMR: "Kameroen",
  CAN: "Canada",
  CAF: "Centraal-Afrikaanse Republiek",
  TCD: "Tsjaad",
  CHL: "Chili",
  CHN: "China",
  COL: "Colombia",
  CRI: "Costa Rica",
  HRV: "Kroatië",
  CUB: "Cuba",
  CYP: "Cyprus",
  CZE: "Tsjechië",
  COD: "Democratische Republiek Congo",
  DNK: "Denemarken",
  DJI: "Djibouti",
  DOM: "Dominicaanse Republiek",
  TLS: "Oost-Timor",
  ECU: "Ecuador",
  EGY: "Egypte",
  SLV: "El Salvador",
  GNQ: "Equatoriaal-Guinea",
  ERI: "Eritrea",
  EST: "Estland",
  ETH: "Ethiopië",
  FIN: "Finland",
  FRA: "Frankrijk",
  GAB: "Gabon",
  GMB: "Gambia",
  GEO: "Georgië",
  DEU: "Duitsland",
  GHA: "Ghana",
  GRC: "Griekenland",
  GRL: "Groenland",
  GTM: "Guatemala",
  GNB: "Guinee-Bissau",
  GIN: "Guinea",
  GUY: "Guyana",
  HTI: "Haïti",
  HND: "Honduras",
  HUN: "Hongarije",
  ISL: "IJsland",
  IND: "India",
  IDN: "Indonesië",
  IRN: "Iran",
  IRQ: "Irak",
  IRL: "Ierland",
  ISR: "Israël",
  ITA: "Italië",
  CIV: "Ivoorkust",
  JAM: "Jamaica",
  JPN: "Japan",
  JOR: "Jordanië",
  KAZ: "Kazachstan",
  KEN: "Kenia",
  KWT: "Koeweit",
  KGZ: "Kirgizië",
  LAO: "Laos",
  LVA: "Letland",
  LBN: "Libanon",
  LSO: "Lesotho",
  LBR: "Liberia",
  LBY: "Libië",
  LTU: "Litouwen",
  LUX: "Luxemburg",
  MKD: "Macedonië",
  MDG: "Madagaskar",
  MWI: "Malawi",
  MYS: "Maleisië",
  MLI: "Mali",
  MRT: "Mauritanië",
  MEX: "Mexico",
  MDA: "Moldavië",
  MNG: "Mongolië",
  MNE: "Montenegro",
  MAR: "Marokko",
  MOZ: "Mozambique",
  MMR: "Myanmar",
  NAM: "Namibië",
  NPL: "Nepal",
  NLD: "Nederland",
  NCL: "Nieuw-Caledonië",
  NZL: "Nieuw-Zeeland",
  NIC: "Nicaragua",
  NER: "Niger",
  NGA: "Nigeria",
  PRK: "Noord-Korea",
  NOR: "Noorwegen",
  OMN: "Oman",
  PAK: "Pakistan",
  PAN: "Panama",
  PNG: "Papoea-Nieuw-Guinea",
  PRY: "Paraguay",
  PER: "Peru",
  PHL: "Filipijnen",
  POL: "Polen",
  PRT: "Portugal",
  PRI: "Puerto Rico",
  QAT: "Qatar",
  SRB: "Servië",
  COG: "Republiek Congo",
  ROU: "Roemenië",
  RUS: "Rusland",
  RWA: "Rwanda",
  SAU: "Saudi-Arabië",
  SEN: "Senegal",
  SLE: "Sierra Leone",
  SVK: "Slowakije",
  SVN: "Slovenië",
  SLB: "Salomonseilanden",
  SOM: "Somalië",
  ZAF: "Zuid-Afrika",
  KOR: "Zuid-Korea",
  SSD: "Zuid-Soedan",
  ESP: "Spanje",
  LKA: "Sri Lanka",
  SDN: "Soedan",
  SUR: "Suriname",
  SWZ: "Swaziland",
  SWE: "Zweden",
  CHE: "Zwitserland",
  SYR: "Syrië",
  TWN: "Taiwan",
  TJK: "Tadzjikistan",
  THA: "Thailand",
  BHS: "Bahama's",
  TGO: "Togo",
  TTO: "Trinidad en Tobago",
  TUN: "Tunesië",
  TUR: "Turkije",
  TKM: "Turkmenistan",
  UGA: "Oeganda",
  UKR: "Oekraïne",
  ARE: "Verenigde Arabische Emiraten",
  GBR: "Verenigd Koninkrijk",
  TZA: "Tanzania",
  USA: "Verenigde Staten",
  URY: "Uruguay",
  UZB: "Oezbekistan",
  VUT: "Vanuatu",
  VEN: "Venezuela",
  VNM: "Vietnam",
  PSE: "Westelijke Jordaanoever",
  ESH: "Westelijke Sahara",
  YEM: "Jemen",
  ZMB: "Zambia",
  ZWE: "Zimbabwe"
    };
    let DutchCountryName = countryNamesNL[member["fav_country"]];
    console.log(DutchCountryName)
</script>
<div class="grid-wrapper">
    <h1>Squad 2F</h1>
    {#if member.mugshot}
          <img src="https://fdnd.directus.app/assets/{member.mugshot}?width=500&height=500" alt="foto van {member.name}" width=250 height=250/>
    {:else}
    <img src="https://avatars.githubusercontent.com/u/89637532?s=200&v=4" alt="MONKE" width=250 height=250/>
    
    {/if}
    {#if member.name}
        <h2>{member.name}</h2>
    {/if}
    <div class="info-container">
        {#if member.bio}
            <article class="basic-card section-bio">
                <h3>Bio</h3>
                <p>{member.bio}</p>
            </article>
        {/if}
        {#if member.github_handle || member.website}
            <article class="basic-card user-links">
                <h3>Links</h3>
                {#if member.github_handle}
                    <a href="https://github.com/{member.github_handle}">Github</a>
                {/if}
                {#if member.website}
                    <a href="{member.website}">website</a>
                {/if}
            </article>
        {/if}
    </div>

    <ul class="favo-slider">
        {#each filters as filter}
        {#if member[filter[0]]}
            <li class="basic-card favo-card">
                {#if filter[0] == "fav_country"}
                    <h3>{filter[1]}</h3>
                    <span>{DutchCountryName}</span>
                {:else}
                    <h3>{filter[1]}</h3>
                    <span>{member[filter[0]]}</span>
                {/if}

            </li>
        {/if}
        {/each}
    </ul>
</div>
