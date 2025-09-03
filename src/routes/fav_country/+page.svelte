<script>
	let { data } = $props();
    const members = data.members
    const filters = data.allowedFilters
    console.log(data.allowedFilters);
</script>

{#if filters && filters.length > 0}

    {#each filters as filter}
        <li><a href="/{filter}">{filter}</a></li>
    {/each}
    {#each members as member}
        <li> <a href="/{member.id}">{member.name} { member.fav_country}</a></li>
    {/each}
{:else}
<!-- TODO: FALLBACK -->
{/if}