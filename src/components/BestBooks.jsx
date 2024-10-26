import React from 'react';
import axios from 'axios';
import AddBook from './AddBook.jsx'
import ErrorMessage from './ErrorMessage'
import { Carousel } from 'react-bootstrap';
const API_URI = import.meta.env.VITE_IS_DEV == 'true' ? import.meta.env.VITE_BOOKS_API_DEV : import.meta.env.VITE_BOOKS_API_PROD;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      active: false,
      new_book: {
        title: '',
        description: '',
        status: ''
      },
      error_message: ''
    }

  }

  async componentDidMount() {
    console.log(API_URI)
    axios.get(`${API_URI}/books`)
      .then(response =>{
        console.log('fetch', response.data)
        this.setState({books: response.data})
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleModalOpen = () => {
      this.setState({active:true})
  }
  handleModalClose = () =>{
    this.setState({active:false})
  }

  handleNewBookForm = (e) => {
    const newBookProps = {
        ...this.state.new_book,
        [e.target.name]:  e.target.value
    }
    this.setState({new_book: newBookProps});
  }

  handleNewBookSubmit = async (e) => {
    e.preventDefault();
    this.handleModalClose();

    await axios.post(`${API_URI}/books`, null, {params: this.state.new_book})
    .then((response => {
      console.log('successful post', response)
        if('title' in response.data){
          this.setState({books: [...this.state.books, response.data]})
        }
      }).bind(this))
      .catch( (error => {
        let msg = 'response' in error ? error.response.data : error.message
        this.setState({error_message:msg})
      }).bind(this));
  }

  render() {

    console.log('render', this.state)
    return (
      <>
        <div className="d-flex justify-content-between align-items-center m-4">
          <h2 >My Essential Lifelong Learning &amp; Formation Shelf</h2>
          <div>
            <AddBook active={this.state.active}
                     handleOpen={this.handleModalOpen}
                     handleClose={this.handleModalClose}
                     handleSubmit={this.handleNewBookSubmit}
                     handleNewBook={this.handleNewBookForm}
                     />
          </div>
        </div>
        <div>
          <ErrorMessage message={this.state.error_message} />
        </div>
        { 
          this.state.books.length ? (
          <Carousel data-bs-theme="dark">
          {this.state.books.map((book,i) =>{
            return (
              <Carousel.Item key={i}>
                   
                <h3>{book.title}</h3>
                <p>{book.description}.</p>
              
              </Carousel.Item>
            )

          })}
          </Carousel>
        ) : (
       
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
