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
 let doubledSecondHalf = $derived([...secondHalf, ...secondHalf]);

  // const members = data.members;
  // const filters = data.allowedFilters;
  // console.log(data.allowedFilters);
  
</script>
<h1>FDND Squadpage</h1>
{#if filters && filters.length > 0}
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
{:else}
<!-- TODO: FALLBACK -->
{/if}


<section>
{#if members && members.length > 0}
  {#if firstHalf && firstHalf.length > 0}


  <div class="contain">
    <ul class="slider">
      {#each firstHalf as member}
        <li class="person-card">
          <img src={member.avatar} alt="" />
          <span>Show item</span>
          <!-- <span>{member[filteredItem]}</span> -->
          <h3>{member.name}</h3>
          <p>{member.bio}</p>
          <a href={member.website}>github logo</a>
        </li>
      {/each}
  
      <!-- duplicate want anders is animatie kut (SORRY) -->
      {#each firstHalf as member}
        <li class="person-card">
          <img src={member.avatar} alt="" />
          <span>Show item</span>
          <!-- <span>{member[filteredItem]}</span> -->
          <h3>{member.name}</h3>
          <a href={member.website}>github logo</a>
        </li>
      {/each}

    </ul>
  </div>

  {:else}
  <!-- TODO: FALLBACK -->
  {/if}


  {#if secondHalf && secondHalf.length > 0}
    <div class="contain">
      <!-- bottom slider -->
      <ul class="slider">
        {#each doubledSecondHalf as member}
          <li class="person-card">
              <span>Show item</span>
              <img src={member.avatar} alt="foto van{member.name}" />
              <h3>{member.name}</h3>
              <a href={member.website}>github logo</a>
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





