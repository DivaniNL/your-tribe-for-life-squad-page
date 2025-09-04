<script>
  let { data } = $props();
	import { page } from '$app/state';
  // // reactive state
  let members = $state([]);
  let filters = $state([]);
  let filtertype = $state('');

  $effect(() => {
  //   // assign directly to $state variables
    members = data.members;
    filters = data.allowedFilters;
    filtertype = data.filtertype;
  });

  // const members = data.members;
  // const filters = data.allowedFilters;
  // console.log(data.allowedFilters);
  
</script>

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

{#if members && members.length > 0}
  <ul class="members">
    {#each members as member}
        <li> <a href="/{member.id}">{member.name} { member.filterValue}</a></li>
    {/each} 
  </ul>
{:else}
<!-- TODO: FALLBACK -->
{/if}


<style>

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

</style>