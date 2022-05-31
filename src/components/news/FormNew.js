import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { createNew } from '../../server/news/createNew';

const FormCreateNew = () => {


    // Validator
    const [, setValidated] = useState(false);


    // Title
    const [title, setTitle] = useState('')
    const inputTitle = ( e ) => {
        setTitle( e.target.value );
    }

    // Description
    const [description, setDescription] = useState('')
    const inputDescription = ( e ) => {
        setDescription( e.target.value );
    }

    // Content
    const [content, setContent] = useState('')
    const inputContent = ( e ) => {
        setContent( e.target.value );
    }

    // Author
    const [author, setAuthor] = useState('')
    const inputAuthor = ( e ) => {
        setAuthor( e.target.value );
    }

    // Submit
    const handleSubmit = async (event) => {
        
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        // Create New
        await createNew(title,description,content,author);
        setValidated(true);

      };

    return (
        <Form id="form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control required type="text" placeholder="Title"  value={title} onChange={inputTitle}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Control required type="text" placeholder="Description" value={description} onChange={inputDescription}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="content">
                <Form.Control required as="textarea" placeholder="Content" value={content} onChange={inputContent}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="author">
                <Form.Control required type="text" placeholder="Author" value={author} onChange={inputAuthor}/>
            </Form.Group>
            <Button variant="dark" type="submit" className="px-5">
                Save
            </Button>
        </Form>
    )
}

export default FormCreateNew