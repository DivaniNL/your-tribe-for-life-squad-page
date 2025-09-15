<script>

  let { data } = $props();
  import { page } from "$app/state";

  import { Card } from '$lib'

  const members = data.members;
  console.log(data);

  const filters = data.allowedFilters;
  
  //meebers split voor duplicate content zonder dubbele html (anders gaat slider niet werken >:( ... )
  const splitMembers = Math.ceil(members.length / 2);

  const firstHalf = members.slice(0, splitMembers); //first half
  const secondHalf = members.slice(splitMembers); //second half

</script>

<h1>FDND Squadpage</h1>

{#if filters && filters.length > 0}
  <input type="checkbox" id="toggle-filter" name="toggle-filter" />
  <label for="toggle-filter">Toon/Verberg filters</label>
  <ul class="filters">
    {#each filters as filter}
      <li>
        <a
          href={`/filter/${filter[0]}`}
          aria-current={page.url.pathname === `/filter/${filter[0]}`}
        >
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"
              >{@html filter[2]}
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
  <!-- top slider -->
  <div class="contain">
    <ul class="slider">
      {#each firstHalf as member}
      <Card {member}/>
      {/each}     
    </ul>
  </div>

  <div class="contain">
    <!-- bottom slider -->
    <ul class="slider">
      {#each secondHalf as member}
        <Card {member} />
      {/each}
    </ul>
  </div>
</section>

<style>
  @keyframes slideInLeft {
    from {
      transform: translateX(-200%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      transform: translateX(200%);
    }
    to {
      transform: translateX(0);
    }
  }

  .contain {
    animation: slideInRight 1.5s ease-out;
  }

  .contain:nth-child(2) {
    animation: slideInLeft 1.5s ease-out;
  }
</style>
