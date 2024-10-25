import React from 'react';
import axios from 'axios';

import Carousel from 'react-bootstrap/Carousel';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }

  }

  async componentDidMount() {
    const API_URI = import.meta.env.VITE_IS_DEV == 'true' ? import.meta.env.VITE_BOOKS_API_DEV : import.meta.env.VITE_BOOKS_API_PROD;
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

  render() {

    console.log('render', this.state)
    return (
      <>
        <h2 className="m-4">My Essential Lifelong Learning &amp; Formation Shelf</h2>

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
