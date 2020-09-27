export const selectBook = book  => async (dispatch) => {

  dispatch({ 
    type: 'SELECT_BOOK',
    payload: book
  });
}