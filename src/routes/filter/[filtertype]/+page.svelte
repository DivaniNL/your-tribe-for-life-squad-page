<script>
  let { data } = $props();

  // reactive state
  let members = $state([]);
  let filters = $state([]);
  let filtertype = $state('');

  $effect(() => {
    // assign directly to $state variables
    members = data.members;
    filters = data.allowedFilters;
    filtertype = data.filtertype;
  });
  
</script>

{#if filters && filters.length > 0}

    {#each filters as filter}
        <li><a href="/filter/{filter}">{filter}</a></li>
    {/each}
    {#each members as member}
        <li> <a href="/{member.id}">{member.name} { member.filterValue}</a></li>
    {/each}
{:else}
<!-- TODO: FALLBACK -->
{/if}