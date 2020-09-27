import React from 'react';
import BookDetail from './BookDetail';
import BookList from './BookList';

const App = () => {
  return (
    <div className="App">
      <BookList />
      <BookDetail />
    </div>
  );
}

export default App;