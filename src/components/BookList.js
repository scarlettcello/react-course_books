import React from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions';

class BookList extends React.Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li 
          key={book.title} 
          className="list-group-item"
          onClick={() => this.props.selectBook(book)}
        >
          {book.title}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps, { selectBook })(BookList);