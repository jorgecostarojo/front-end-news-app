import { fetchAnonymous } from "../fetch/petitions/fetch";

export const archiveNew = async (_id) => {
    const payload = {
        _id: _id
    }

    const resp = await fetchAnonymous('news/archive', payload, 'POST')
    const news = await resp.json()
    return news

}