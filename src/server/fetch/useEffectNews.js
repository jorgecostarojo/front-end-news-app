import { useEffect, useState } from "react"
import {getNews} from '../news/getNews'


export const useEffectNews = (news) => {

    const [state, setState] = useState({
        data: [],
    });

    useEffect( () => {
         getNews()
            .then((resp) => {
                setState({
                    data: resp,
                })
            });
    }, [news])


    return state;

}