<script>
  let { data } = $props();
	import { page } from '$app/state';
  // // reactive state
  let members = $state([]);
  let firstHalf = $state([]);
  let secondHalf = $state([]);
  let filters = $state([]);
  let filtertype = $state('');

  $effect(() => {
  // assign directly to $state variables
    members = data.members;
    firstHalf = data.firstHalf;
    secondHalf = data.secondHalf;
    filters = data.allowedFilters;
    filtertype = data.filtertype;
  });

  //duplicate content
  // dit werkt maar moet nog op de rest toegepast worden
  let doubledFirstHalf = $derived([...firstHalf, ...firstHalf]);
  let doubledSecondHalf = $derived([...secondHalf, ...secondHalf]);

  // const members = data.members;
  // const filters = data.allowedFilters;
  // console.log(data.allowedFilters);
  
</script>
<h1>FDND Squadpage</h1>

{#if filters && filters.length > 0}
  <input type="checkbox" id="toggle-filter" name="toggle-filter" />
  <label for="toggle-filter">Toon/Verberg filters</label>
  <ul class="filters">
    {#each filters as filter}
        <li>
          <a href={`/filter/${filter[0]}`} aria-current={page.url.pathname === `/filter/${filter[0]}`}>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">{@html filter[2]}
              </svg>
            </div>
            <p>{filter[1]}</p>
          </a>
        </li>
    {/each}
  </ul>
  <a  class="removefilter" href="/">Verwijder filters</a>
{:else}
<!-- TODO: FALLBACK -->
{/if}


<section>
{#if members && members.length > 0}
  {#if firstHalf && firstHalf.length > 0}

  <div class="contain">
    <ul class="slider">
      {#each doubledFirstHalf as member}
        <li class="person-card">
           {#if member.mugshot}
            <img
              src="https://fdnd.directus.app/assets/{member.mugshot}?width=500&height=500"
              alt="foto van {member.name}"
            />
          {:else}
            <img
              src="https://avatars.githubusercontent.com/u/89637532?s=200&v=4"
              alt="MONKE"
              width="250"
              height="250"
            />
          {/if}
          <span style="border: 2px solid {member.fav_color}">{member.filterValue}</span>
          <div class="info-dialog">
            <h3>{member.name}</h3>
            <p class="member-bio">{member.bio}</p>
            <div class="links">
              <a href={member.website}>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M415.9 344L225 344C227.9 408.5 242.2 467.9 262.5 511.4C273.9 535.9 286.2 553.2 297.6 563.8C308.8 574.3 316.5 576 320.5 576C324.5 576 332.2 574.3 343.4 563.8C354.8 553.2 367.1 535.8 378.5 511.4C398.8 467.9 413.1 408.5 416 344zM224.9 296L415.8 296C413 231.5 398.7 172.1 378.4 128.6C367 104.2 354.7 86.8 343.3 76.2C332.1 65.7 324.4 64 320.4 64C316.4 64 308.7 65.7 297.5 76.2C286.1 86.8 273.8 104.2 262.4 128.6C242.1 172.1 227.8 231.5 224.9 296zM176.9 296C180.4 210.4 202.5 130.9 234.8 78.7C142.7 111.3 74.9 195.2 65.5 296L176.9 296zM65.5 344C74.9 444.8 142.7 528.7 234.8 561.3C202.5 509.1 180.4 429.6 176.9 344L65.5 344zM463.9 344C460.4 429.6 438.3 509.1 406 561.3C498.1 528.6 565.9 444.8 575.3 344L463.9 344zM575.3 296C565.9 195.2 498.1 111.3 406 78.7C438.3 130.9 460.4 210.4 463.9 296L575.3 296z"/></svg>
                </div>
                <p>Website</p>
              </a>
              <a href="/{member.id}">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM288 224C288 206.3 302.3 192 320 192C337.7 192 352 206.3 352 224C352 241.7 337.7 256 320 256C302.3 256 288 241.7 288 224zM280 288L328 288C341.3 288 352 298.7 352 312L352 400L360 400C373.3 400 384 410.7 384 424C384 437.3 373.3 448 360 448L280 448C266.7 448 256 437.3 256 424C256 410.7 266.7 400 280 400L304 400L304 336L280 336C266.7 336 256 325.3 256 312C256 298.7 266.7 288 280 288z"/></svg>                </div>
                <p>Lees meer</p>
              </a>
            </div>
            
          </div>

        </li>
      {/each}
    </ul>
  </div>

  {:else}
  <!-- TODO: FALLBACK -->
  {/if}


  
  <!-- bottom slider -->
  {#if secondHalf && secondHalf.length > 0}
   
  <div class="contain">
      <ul class="slider">
        {#each doubledSecondHalf as member}

          <li class="person-card">
            <span style="border: 2px solid {member.fav_color}">{member.filterValue}</span>
        
             {#if member.mugshot}
            <img
              src="https://fdnd.directus.app/assets/{member.mugshot}?width=500&height=500"
              alt="foto van {member.name}"
            />
          {:else}
            <img
              src="https://avatars.githubusercontent.com/u/89637532?s=200&v=4"
              alt="MONKE"
              width="250"
              height="250"
            />
          {/if}
          
            <div class="info-dialog">
              <h3>{member.name}</h3>
              <p class="member-bio">{member.bio}</p>
              
              <div class="links">
                <a href={member.website}>
                 
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M415.9 344L225 344C227.9 408.5 242.2 467.9 262.5 511.4C273.9 535.9 286.2 553.2 297.6 563.8C308.8 574.3 316.5 576 320.5 576C324.5 576 332.2 574.3 343.4 563.8C354.8 553.2 367.1 535.8 378.5 511.4C398.8 467.9 413.1 408.5 416 344zM224.9 296L415.8 296C413 231.5 398.7 172.1 378.4 128.6C367 104.2 354.7 86.8 343.3 76.2C332.1 65.7 324.4 64 320.4 64C316.4 64 308.7 65.7 297.5 76.2C286.1 86.8 273.8 104.2 262.4 128.6C242.1 172.1 227.8 231.5 224.9 296zM176.9 296C180.4 210.4 202.5 130.9 234.8 78.7C142.7 111.3 74.9 195.2 65.5 296L176.9 296zM65.5 344C74.9 444.8 142.7 528.7 234.8 561.3C202.5 509.1 180.4 429.6 176.9 344L65.5 344zM463.9 344C460.4 429.6 438.3 509.1 406 561.3C498.1 528.6 565.9 444.8 575.3 344L463.9 344zM575.3 296C565.9 195.2 498.1 111.3 406 78.7C438.3 130.9 460.4 210.4 463.9 296L575.3 296z"/></svg>
                  </div>
                  
                  <p>Website</p>
                </a>
                
                <a href="/{member.id}">
                  <div>
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM288 224C288 206.3 302.3 192 320 192C337.7 192 352 206.3 352 224C352 241.7 337.7 256 320 256C302.3 256 288 241.7 288 224zM280 288L328 288C341.3 288 352 298.7 352 312L352 400L360 400C373.3 400 384 410.7 384 424C384 437.3 373.3 448 360 448L280 448C266.7 448 256 437.3 256 424C256 410.7 266.7 400 280 400L304 400L304 336L280 336C266.7 336 256 325.3 256 312C256 298.7 266.7 288 280 288z"/></svg>                
                  </div>
                  <p>Lees meer</p>
                </a>
              
              </div>
            
            </div>
          </li>
        {/each}
        </ul>
  </div>

  {:else}
  <!-- TODO: FALLBACK -->
  {/if}
  {:else}
  <!-- TODO: FALLBACK -->
  {/if}

</section>





