<script>
	let { data } = $props();
    const members = data.members
    console.log(data);
</script>
{#each members as member }
    <li> <a href="/{member.id}">{member.name}</a></li>
{/each}