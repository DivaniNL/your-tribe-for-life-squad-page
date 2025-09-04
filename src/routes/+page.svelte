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
 <ul class="slider">
    {#each firstHalf as member}
    <li class="person-card">
      <img src={member.avatar} alt="" />
      <span><p>Show item</p></span>
      <!-- <span>{member[filteredItem]}</span> -->
      <h3>{member.name}</h3>
      <a href={member.website}>github logo</a>
    </li>
    {/each}
  </ul>

<!-- bottom slider -->
 
<ul class="slider">
    {#each secondHalf as member}
    <li class="person-card">
    <span><p>Show item</p></span>
      <img src={member.avatar} alt="" />
      <h3>{member.name}</h3>
      <a href={member.website}>github logo</a>
    </li>
    {/each}
</ul>

<style>
    ul{
        width: auto;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }

  .person-card {
    position: relative;
    max-height: 30em;
    width: 30em;
    overflow: hidden; /* voorkomt dat img buiten de card steekt */

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1rem;
    color: white;
  }

  .person-card img {
    position: absolute;
    inset: 0; /* top:0; right:0; bottom:0; left:0 */
    width: 100%;
    height: 100%;
    object-fit: cover; /* zorgt dat de foto het vak mooi opvult */
    z-index: -1; /* achter de content */
  }
</style>
