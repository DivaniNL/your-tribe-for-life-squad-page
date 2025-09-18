<script>
    let { data } = $props();
    const member = data.member;
    const filters = data.allowedFilters;
    const DutchCountryName = data.DutchCountryName;
</script>

<div class="grid-wrapper">
    {#if member.name}
        <h1>{member.name}</h1>
    {/if}

    <div class="breadcrumbs">
        <p>
            <a href="/" class="home-link" aria-current="false">Squad 2F</a> &gt;
            <a href="#" class="detail-link" aria-current="true">{member.name}</a>
        </p>
    </div>

    {#if member.mugshot}
        <img class="animation-fade-in" src="https://fdnd.directus.app/assets/{member.mugshot}?width=500&height=500" alt="foto van {member.name}" width="250" height="250" style="view-transition-name: person-{member.id}" >
    {:else}
        <img src="https://avatars.githubusercontent.com/u/89637532?s=200&v=4" alt="MONKE" width="250" height="250" style="view-transition-name: person-{member.id}" >
    {/if}

    <div class="info-container">
        {#if member.bio}
            <article class="basic-card section-bio">
                <h2>Bio</h2>
                <p>{@html member.bio}</p>
            </article>
        {/if}

        {#if member.github_handle || member.website}
            <article class="basic-card user-links animation-slide-in--up" style="--delay: 0.2s;">
                <h3>Links</h3>
                {#if member.github_handle}
                    <a href="https://github.com/{member.github_handle}">Github</a>
                {/if}
                {#if member.website}
                    <a href={member.website}>website</a>
                {/if}
            </article>
        {/if}
    </div>

    <ul class="favo-slider">
        {#each filters as filter, i}
            {#if member[filter[0]]}
                <li class="basic-card favo-card animation-slide-in--up" style="--delay: {i * 0.2 + 0.2}s;">
                    {#if filter[0] == "fav_country"}
                        <h3>{filter[1]}</h3>
                        <span>{DutchCountryName}</span>
                    {:else}
                        <h3>{filter[1]}</h3>
                        <span>{member[filter[0]]}</span>
                    {/if}
                </li>
            {/if}
        {/each}
    </ul>
</div>
