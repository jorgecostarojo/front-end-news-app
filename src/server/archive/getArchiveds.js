import { fetchAnonymous } from "../fetch/petitions/fetch";

export const getArchived = async () => {
    const resp = await fetchAnonymous('archived/get_all', null)
    const archived = await resp.json()
    
    return archived

}