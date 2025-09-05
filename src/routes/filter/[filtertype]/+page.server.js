const allowedFilters = [
    ["fav_property",'Property','<path d="M392.8 65.2C375.8 60.3 358.1 70.2 353.2 87.2L225.2 535.2C220.3 552.2 230.2 569.9 247.2 574.8C264.2 579.7 281.9 569.8 286.8 552.8L414.8 104.8C419.7 87.8 409.8 70.1 392.8 65.2zM457.4 201.3C444.9 213.8 444.9 234.1 457.4 246.6L530.8 320L457.4 393.4C444.9 405.9 444.9 426.2 457.4 438.7C469.9 451.2 490.2 451.2 502.7 438.7L598.7 342.7C611.2 330.2 611.2 309.9 598.7 297.4L502.7 201.4C490.2 188.9 469.9 188.9 457.4 201.4zM182.7 201.3C170.2 188.8 149.9 188.8 137.4 201.3L41.4 297.3C28.9 309.8 28.9 330.1 41.4 342.6L137.4 438.6C149.9 451.1 170.2 451.1 182.7 438.6C195.2 426.1 195.2 405.8 182.7 393.3L109.3 320L182.6 246.6C195.1 234.1 195.1 213.8 182.6 201.3z">'],
    ["fav_kitchen",'Gerecht','<path d="M127.9 78.4C127.1 70.2 120.2 64 112 64C103.8 64 96.9 70.2 96 78.3L81.9 213.7C80.6 219.7 80 225.8 80 231.9C80 277.8 115.1 315.5 160 319.6L160 544C160 561.7 174.3 576 192 576C209.7 576 224 561.7 224 544L224 319.6C268.9 315.5 304 277.8 304 231.9C304 225.8 303.4 219.7 302.1 213.7L287.9 78.3C287.1 70.2 280.2 64 272 64C263.8 64 256.9 70.2 256.1 78.4L242.5 213.9C241.9 219.6 237.1 224 231.4 224C225.6 224 220.8 219.6 220.2 213.8L207.9 78.6C207.2 70.3 200.3 64 192 64C183.7 64 176.8 70.3 176.1 78.6L163.8 213.8C163.3 219.6 158.4 224 152.6 224C146.8 224 142 219.6 141.5 213.9L127.9 78.4zM512 64C496 64 384 96 384 240L384 352C384 387.3 412.7 416 448 416L480 416L480 544C480 561.7 494.3 576 512 576C529.7 576 544 561.7 544 544L544 96C544 78.3 529.7 64 512 64z">'],
    ["fav_book_genre",'Genre','<path d="M480 576L192 576C139 576 96 533 96 480L96 160C96 107 139 64 192 64L496 64C522.5 64 544 85.5 544 112L544 400C544 420.9 530.6 438.7 512 445.3L512 512C529.7 512 544 526.3 544 544C544 561.7 529.7 576 512 576L480 576zM192 448C174.3 448 160 462.3 160 480C160 497.7 174.3 512 192 512L448 512L448 448L192 448zM224 216C224 229.3 234.7 240 248 240L424 240C437.3 240 448 229.3 448 216C448 202.7 437.3 192 424 192L248 192C234.7 192 224 202.7 224 216zM248 288C234.7 288 224 298.7 224 312C224 325.3 234.7 336 248 336L424 336C437.3 336 448 325.3 448 312C448 298.7 437.3 288 424 288L248 288z">'],
    ["fav_country",'Land','<path d="M320.2 112C435 112.1 528 205.2 528 320C528 342.1 524.6 363.4 518.2 383.4C516.2 383.8 514.1 384 512 384L509.3 384C500.8 384 492.7 380.6 486.7 374.6L457.4 345.3C451.4 339.3 448 331.2 448 322.7L448 272C448 263.2 455.2 256 464 256C472.8 256 480 248.8 480 240C480 231.2 472.8 224 464 224L440 224C426.7 224 416 234.7 416 248C416 261.3 405.3 272 392 272L336 272C327.2 272 320 279.2 320 288C320 296.8 312.8 304 304 304L278.6 304C266.1 304 256 293.9 256 281.4C256 275.4 258.4 269.6 262.6 265.4L332.7 195.3C334.8 193.2 336 190.3 336 187.3C336 181.1 330.9 176 324.7 176L310.6 176C298.1 176 288 165.9 288 153.4C288 147.4 290.4 141.6 294.6 137.4L317.7 114.3C318.5 113.5 319.3 112.8 320.2 112.1zM502.4 420.1C469.6 479.7 408.5 521.5 337.2 527.3C336.5 525 336.1 522.5 336.1 520C336.1 506.7 325.4 496 312.1 496L285.4 496C276.9 496 268.8 492.6 262.8 486.6L233.5 457.3C227.5 451.3 224.1 443.2 224.1 434.7L224.1 368C224.1 350.3 238.4 336 256.1 336L354.8 336C363.3 336 371.4 339.4 377.4 345.4L406.7 374.7C412.7 380.7 420.8 384.1 429.3 384.1L434.8 384.1C443.3 384.1 451.4 387.5 457.4 393.5L473.4 409.5C477.6 413.7 483.4 416.1 489.4 416.1C494.2 416.1 498.7 417.6 502.4 420.2zM320 576L346.2 574.7C337.6 575.6 328.9 576 320 576zM346.2 574.7C475.3 561.6 576 452.6 576 320C576 178.6 461.4 64 320 64L320 64C178.6 64 64 178.6 64 320C64 447.5 157.2 553.3 279.3 572.8C292.5 574.9 306.1 576 320 576zM251.3 187.3L219.3 219.3C213.1 225.5 202.9 225.5 196.7 219.3C190.5 213.1 190.5 202.9 196.7 196.7L228.7 164.7C234.9 158.5 245.1 158.5 251.3 164.7C257.5 170.9 257.5 181.1 251.3 187.3z">'],
    ["fav_coffee",'Koffie','<path d="M184 48C170.7 48 160 58.7 160 72C160 110.9 183.4 131.4 199.1 145.1L200.2 146.1C216.5 160.4 224 167.9 224 184C224 197.3 234.7 208 248 208C261.3 208 272 197.3 272 184C272 145.1 248.6 124.6 232.9 110.9L231.8 109.9C215.5 95.7 208 88.1 208 72C208 58.7 197.3 48 184 48zM128 256C110.3 256 96 270.3 96 288L96 480C96 533 139 576 192 576L384 576C425.8 576 461.4 549.3 474.5 512L480 512C550.7 512 608 454.7 608 384C608 313.3 550.7 256 480 256L128 256zM480 448L480 320C515.3 320 544 348.7 544 384C544 419.3 515.3 448 480 448zM320 72C320 58.7 309.3 48 296 48C282.7 48 272 58.7 272 72C272 110.9 295.4 131.4 311.1 145.1L312.2 146.1C328.5 160.4 336 167.9 336 184C336 197.3 346.7 208 360 208C373.3 208 384 197.3 384 184C384 145.1 360.6 124.6 344.9 110.9L343.8 109.9C327.5 95.7 320 88.1 320 72z">'],
    ["fav_emoji",'Emoji','<path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM229.4 385.9C249.8 413.9 282.8 432 320 432C357.2 432 390.2 413.9 410.6 385.9C418.4 375.2 433.4 372.8 444.1 380.6C454.8 388.4 457.2 403.4 449.4 414.1C420.3 454 373.2 480 320 480C266.8 480 219.7 454 190.6 414.1C182.8 403.4 185.2 388.4 195.9 380.6C206.6 372.8 221.6 375.2 229.4 385.9zM208 272C208 254.3 222.3 240 240 240C257.7 240 272 254.3 272 272C272 289.7 257.7 304 240 304C222.3 304 208 289.7 208 272zM400 240C417.7 240 432 254.3 432 272C432 289.7 417.7 304 400 304C382.3 304 368 289.7 368 272C368 254.3 382.3 240 400 240z">']
];
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
const slugs = allowedFilters.map(filter => filter[0]);
export async function load({url, params}){
    const filtertype = params.filtertype;
    const isValidFilter = slugs.includes(filtertype);
    if(filtertype != '' && isValidFilter){
        const membersReponse = await fetch(`https://fdnd.directus.app/items/person/?sort=name&fields=id,name,nickname,github_handle,website,bio,avatar,mugshot,birthdate,fav_color,squads.squad_id.name,squads.squad_id.cohort,`+ filtertype +`&filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"FDND Jaar 2"}}}},{"squads":{"squad_id":{"cohort":"2526"}}}]}`)
        const membersResponseData = await membersReponse.json()

        const members = membersResponseData.data.map(member => {
            if(filtertype == "fav_country"){
                let DutchCountryName = countryNamesNL[member[filtertype]]
                return ({
                    ...member,
                    filterValue: isValidFilter && member[filtertype] ? DutchCountryName : "Geen voorkeur"
                })
            }
            else{
                return ({
                    ...member,
                    filterValue: isValidFilter && member[filtertype] ? member[filtertype] : "Geen voorkeur"
                })
            }
        });
        // split members in half
        const splitMembers = Math.ceil(members.length / 2);

        // make variable for each slide
        const firstHalf = members.slice(0, splitMembers); //first half~
        const secondHalf = members.slice(splitMembers); //second half
        return{members,firstHalf, secondHalf, allowedFilters}
    }
    else{
        const membersResponse = await fetch(`https://fdnd.directus.app/items/person/?sort=name&fields=id,name,nickname,github_handle,website,bio,avatar,birthdate,fav_color,squads.squad_id.name,squads.squad_id.cohort&filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"FDND Jaar 2"}}}},{"squads":{"squad_id":{"cohort":"2526"}}}]}`)
        const membersReponseData = await membersResponse.json();
        // split members in half
        const splitMembers = Math.ceil(members.length / 2);

        // make variable for each slide
        const firstHalf = members.slice(0, splitMembers); //first half
        const secondHalf = members.slice(splitMembers); //second half
        return{members: membersResponse.data,firstHalf, secondHalf, allowedFilters}
    }
    
}