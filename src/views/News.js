import { useState } from 'react'
import New from '../components/news/New'
import CreateNew from '../components/news/CreateNew';
import { useEffectNews } from '../server/fetch/useEffectNews'

function NewsView() {

    const [newsData, setNewsData] = useState([])

    const { data: newsList } = useEffectNews(newsData);

    return (
        <div className="container">
            <div className="d-flex flex-row-reverse">
                <CreateNew />
            </div>
            {newsList.map((item) => {
                return (
                    <ol>
                        <New
                            _id={item._id}
                            title={item.title}
                            description={item.description}
                            date={item.date}
                            content={item.content}
                            author={item.author}
                            archivedDate={item.archivedDate}
                            key={item._id}
                            setNewsData={setNewsData}
                        >
                        </New>
                    </ol>
                )

            })}
        </div >

    );
}

export default NewsView;