<script>
  let { data } = $props();
  const members = data.members;
  console.log(data);

 // split members in half
  const splitMembers = Math.ceil(members.length / 2);

  // make variable for each slide
  const firstHalf = members.slice(0, splitMembers); //first half
  const secondHalf = members.slice(splitMembers); //second half

</script>

<h1>FDND Squadpage</h1>

<fieldset>
    <legend>placeholder voor de "filters"</legend>
    <a href="/">Keuze1</a>
</fieldset>

<!-- top slider -->
<div class="slider">
  {#each firstHalf as member}
    <ul>
      <li class="person-card">
        <img src={member.avatar} alt="" />
        <span><p>Show item</p></span>
        <!-- <span>{member[filteredItem]}</span> -->
        <h3>{member.name}</h3>
        <a href={member.website}>github logo</a>
      </li>
    </ul>
  {/each}
</div>

<!-- bottom slider -->
<div class="slider" style="border: pink solid 2px;">
  {#each secondHalf as member}
    <ul>
      <li class="person-card">
        <img src={member.avatar} alt="" />
        <h3>{member.name}</h3>
        <a href={member.website}>github logo</a>
      </li>
    </ul>
  {/each}
</div>

