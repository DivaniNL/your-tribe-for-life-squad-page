const allowedFilters = [
    "fav_property",
    "fav_kitchen",
    "fav_book_genre",
    "fav_country",
    "fav_coffee",
    "fav_emoji"
];
export async function load({url, params}){
    const membersReponse = await fetch(`https://fdnd.directus.app/items/person/?sort=name&fields=id,name,nickname,github_handle,website,bio,avatar,birthdate,fav_color,squads.squad_id.name,squads.squad_id.cohort,fav_country&filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"FDND Jaar 2"}}}},{"squads":{"squad_id":{"cohort":"2526"}}}]}`)
    const membersResponseData = await membersReponse.json()
    const members = membersResponseData.data;
    return{members, allowedFilters}
}