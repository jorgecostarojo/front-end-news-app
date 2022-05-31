import { fetchAnonymous } from "../fetch/petitions/fetch";

export const deleteArchived = async (_id) => {

    const payload = {
        _id: _id
    }

    
    const resp = await fetchAnonymous('archived/delete', payload, 'DELETE')
    const response = await resp.json()
    return response
}