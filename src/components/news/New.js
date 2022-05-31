import { archiveNew } from '../../server/news/archiveNew'

function New(
    { title,
        description,
        date,
        content,
        author,
        archivedDate,
        _id,
        setNewsData }) {

    const sendArchive = async () => {
        const resp = await archiveNew(_id)
        if (resp === 200) {
            deleteItemFromList()
        }
    }

    const deleteItemFromList = () => {
        setNewsData((newsData) => {
            return newsData.filter(doc => doc._id !== _id)
        })
    }

    return (
        <div className="card mb-3" style={{ width: '18rem' }}>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <p>{date}</p>
            <p>{content}</p>
            <h3>{author}</h3>
            <button type="button" class="btn btn-dark" onClick={sendArchive}>Archive</button>
        </div>
    )
}

export default New