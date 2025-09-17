<script>
  let { data } = $props();
	import { page } from '$app/state';

  import { Card } from '$lib'

  console.log(Card)
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
  console.log(members)
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
        <Card {member} />
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
          <Card {member} />
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





