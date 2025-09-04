<script>
	let { data } = $props();
    const member = data.member;
    const filters = data.allowedFilters;
    console.log(filters)
</script>

<h1>Squad 2F</h1>

<img src="{member.avatar}" alt="avatar image van {member.name}" width="250" height="250">

<h2>{member.name}</h2>

<div class="info-container">
    <article class="basic-card section-bio">
        <h3>Bio</h3>
        <p>{member.bio}</p>
    </article>

    <article class="basic-card user-links">
        <h3>Links</h3>
        <a href="https://github.com/{member.github_handle}">Github</a>
        <a href="{member.website}">website</a>
    </article>
</div>

<ul class="Favo-slider">
    {#each filters as filter}
    <li class="basic-card favo-card">
        <h3>{filter[1]}</h3>
        <span>{member[filter[0]]}</span>
    </li>
    {/each}
</ul>