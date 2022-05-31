import { useState } from 'react'
import Archived from '../components/archived/Archived'
import { useEffectArchived } from '../server/fetch/useEffectArchived'


function ArchiveView() {

    const [archivedData, setArchivedData] = useState([])

    const { data:archivedList } = useEffectArchived( archivedData );


    return (
        <div className="container">
            <div className='mb-5'></div>
            {archivedList.map((item) => {
                return (
                    <Archived
                        _id={item._id}
                        title={item.title}
                        description={item.description}
                        date={item.date}
                        content={item.content}
                        author={item.author}
                        archivedDate={item.archivedDate}
                        setArchivedData={setArchivedData}
                    >
                    </Archived>)

            })}
        </div >

    );
}

export default ArchiveView;