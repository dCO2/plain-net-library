export const ADD_BOOK = "ADD_BOOK";
export const MOVE_BOOK = "MOVE_BOOK";
export const DELETE_BOOK = "DELETE_BOOK";

export default (state, action) => {
	switch(action.type){
		case ADD_BOOK:
			return [
				...state,
				action.payload
				];
		case MOVE_BOOK:
			return state.map(book => (book.id == action.payload.id)? action.payload: book);
    case DELETE_BOOK:
      return state.filter(book => book.id !== action.payload.id);
    default:
      return state;
  }
};