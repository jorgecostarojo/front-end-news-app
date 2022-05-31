import React from 'react'
import { useState } from 'react'
import { Modal } from 'react-bootstrap';
import FormNew from './FormNew'

function CreateNew() {

    const [visible, setVisible] = useState(false);

    const close = () => setVisible(false);
    const show = () => setVisible(true);

    return (
        <div className='mt-2'>
            <button
                type="button" class="btn btn-dark"
                onClick={show}
            >Create New</button>
            <Modal show={visible} onHide={close}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a New</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormNew />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default CreateNew