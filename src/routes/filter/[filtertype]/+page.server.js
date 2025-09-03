const allowedFilters = [
    "fav_property",
    "fav_kitchen",
    "fav_book_genre",
    "fav_country",
    "fav_coffee",
    "fav_emoji"
];
export async function load({url, params}){
    const filtertype = params.filtertype;
    const isValidFilter = allowedFilters.includes(filtertype);
    if(filtertype != '' && isValidFilter){
        const membersReponse = await fetch(`https://fdnd.directus.app/items/person/?sort=name&fields=id,name,nickname,github_handle,website,bio,avatar,birthdate,fav_color,squads.squad_id.name,squads.squad_id.cohort,`+ filtertype +`&filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"FDND Jaar 2"}}}},{"squads":{"squad_id":{"cohort":"2526"}}}]}`)
        const membersResponseData = await membersReponse.json()
        const members = membersResponseData.data.map(member => ({
            ...member,
            filterValue: isValidFilter && member[filtertype] ? member[filtertype] : "Geen voorkeur"
        }));
        return{members,allowedFilters}
    }
    else{
        const membersResponse = await fetch(`https://fdnd.directus.app/items/person/?sort=name&fields=id,name,nickname,github_handle,website,bio,avatar,birthdate,fav_color,squads.squad_id.name,squads.squad_id.cohort&filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"FDND Jaar 2"}}}},{"squads":{"squad_id":{"cohort":"2526"}}}]}`)
        const membersReponseData = await membersResponse.json()
        return{members: membersResponse.data, allowedFilters}
    }
}