export async function load({url,params}){
    const membersReponse = await fetch('https://fdnd.directus.app/items/person/'+params.id)
    const membersReponseData = await membersReponse.json()
    return{member: membersReponseData.data}
}