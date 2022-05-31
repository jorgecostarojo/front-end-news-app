import { deleteArchived } from '../../server/archive/deleteArchived'

function Archived(
    { title,
        description,
        date,
        content,
        author,
        archivedDate,
        _id, 
        setArchivedData }) {

    const sendToDelete = async () => {
        const resp = await deleteArchived(_id)
        if (resp === 200) {
            deleteItemFromList()
        }
    }

    // Delete this item from the list 
    const deleteItemFromList = () => {
        setArchivedData((archivedData) => {
            return archivedData.filter(doc => doc._id !== _id)
        })
    }

    return (
        <div className="card mb-3" style={{width: '18rem'}} >
            <h1>{title}</h1>
            <h2>{description}</h2>
            <p>{archivedDate}</p>
            <p>{content}</p>
            <h3>{author}</h3>
            <button type="button" class="btn btn-dark" onClick={sendToDelete}>Delete</button>
        </div>
    )
}

export default Archived