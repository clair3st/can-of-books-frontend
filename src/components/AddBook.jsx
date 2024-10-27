import React from 'react';
import { Button, Form, Container, Modal} from 'react-bootstrap';
import axios from 'axios';

class AddBooks extends React.Component {

  render() {
  	const props = this.props

  	return(
  		<>

  		{ props.active 
  			? (
  				<Modal show={props.active}>
		        <Modal.Header closeButton>
		          <Modal.Title>Add a Book</Modal.Title>
		        </Modal.Header>

		          <Form  onSubmit={props.handleSubmit}>
		        <Modal.Body>
		          <Form.Group className="mb-3" >
		        	<Form.Label>Title</Form.Label>
		        	<Form.Control name="title" type="text" onChange={props.handleNewBook}/>
		      	  </Form.Group>
		          <Form.Group className="mb-3" onChange={props.handleNewBook}>
		        	<Form.Label>Description</Form.Label>
		        	<Form.Control name="description" as="textarea" rows={3} />
		      	  </Form.Group>
		      	  <Form.Select name="status" aria-label="Default select" onChange={props.handleNewBook}>
				      <option>Status</option>
				      <option value="read">Read</option>
				      <option value="not-read">Want to Read</option>
				    </Form.Select>
		         
		        </Modal.Body>

		        <Modal.Footer>
		          <Button variant="secondary" onClick={props.handleClose}>Close</Button>
		          <Button variant="primary" type="submit" >Save changes</Button>
		        </Modal.Footer>
		        </Form>
		      </Modal>
  			  )
     		:  <Button variant="primary" onClick={props.handleOpen}>Add Book</Button>

  		}
  	 </>
	)}
}

export default AddBooks;

