<script>
  let { data } = $props();
  const members = data.members;
  console.log(data);
</script>


<h1>FDND Squadpage</h1>

<p>hier komen filters</p>

{#each members as member}
  <ul>
    <li class="person-card">
        <img src="{member.avatar}" alt="">
        <h3>{member.name}</h3>
        <a href="{member.website}">github logo</a>
    </li>
  </ul>
{/each}

