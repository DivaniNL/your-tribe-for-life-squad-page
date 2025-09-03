export async function load({url}){
    const membersReponse = await fetch('https://fdnd.directus.app/items/person/?sort=name&fields=*,squads.squad_id.name,squads.squad_id.cohort&filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"FDND Jaar 2"}}}},{"squads":{"squad_id":{"cohort":"2526"}}}]}')
    const membersReponseData = await membersReponse.json()
    return{members: membersReponseData.data}
}