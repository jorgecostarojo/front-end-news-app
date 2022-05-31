import { fetchAnonymous } from "../fetch/petitions/fetch";

export const getNews = async () => {
    const resp = await fetchAnonymous( 'news/get_all', null)
    const news = await resp.json()

    return news

}