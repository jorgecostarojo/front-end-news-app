import { fetchAnonymous } from "../fetch/petitions/fetch";

export const createNew = async (title,description,content,author) => {
    const payload = {
        title,
        description,
        content,
        author,
    }

    const resp = await fetchAnonymous('news/create', payload, 'POST')
    const response = await resp.json()
    return response

}