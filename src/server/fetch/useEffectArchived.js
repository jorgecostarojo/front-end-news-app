import { useEffect, useState } from "react"
import {getArchived} from '../../server/archive/getArchiveds'

export const useEffectArchived = (archived) => {

    const [state, setState] = useState({
        data: [],
    });

    useEffect( () => {
         getArchived()
            .then((resp) => {
                setState({
                    data: resp,
                })
            });
    }, [archived])


    return state;

}