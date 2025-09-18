<script>
  const members = data.members;

  // split members in half
  const splitMembers = Math.ceil(members.length / 2);

  // make variable for each slide
  const firstHalf = members.slice(0, splitMembers); //first half
  const secondHalf = members.slice(splitMembers); //second half
</script>

{#if members && members.length > 0}
  {#if firstHalf && firstHalf.length > 0}
    <div class="contain">
      <ul class="slider">
        {#each firstHalf as member}
          <li class="person-card">
            <img src={member.avatar} alt="">
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
            <img src={member.avatar} alt="">
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
        {#each secondHalf as member}
          <li class="person-card">
            <span><p>Show item</p></span>
            <img src={member.avatar} alt="foto van{member.name}">
            <h3>{member.name}</h3>
            <a href={member.website}>github logo</a>
          </li>
        {/each}

        {#each secondHalf as member}
          <li class="person-card">
            <span>Show item</span>
            <img src={member.avatar} alt="foto van{member.name}">
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
