<script>
  let { data } = $props();
  import { page } from "$app/state";
  const members = data.members;
  console.log(data);
  const filters = data.allowedFilters;
  // split members in half
  const splitMembers = Math.ceil(members.length / 2);

  // make variable for each slide
  const firstHalf = members.slice(0, splitMembers); //first half
  const secondHalf = members.slice(splitMembers); //second half
</script>

<h1>FDND Squadpage</h1>

{#if filters && filters.length > 0}
  <ul class="filters">
    {#each filters as filter}
      <li>
        <a href={`/filter/${filter[0]}`} aria-current={page.url.pathname === `/filter/${filter[0]}`}>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"
              >{@html filter[2]}
            </svg>
          </div>
          <span>{filter[1]}</span>
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

  <div class="contain">
      <!-- bottom slider -->
    <ul class="slider">
      {#each secondHalf as member}
        <li class="person-card">
            <span><p>Show item</p></span>
            <img src={member.avatar} alt="foto van{member.name}" />
            <h3>{member.name}</h3>
            <a href={member.website}>github logo</a>
        </li>
      {/each}

      {#each secondHalf as member}
        <li class="person-card">
            <span>Show item</span>
            <img src={member.avatar} alt="foto van {member.name}" />
            <h3>{member.name}</h3>
            <a href={member.website}>github logo</a>
        </li>
      {/each}
      </ul>
  </div>
</section>
