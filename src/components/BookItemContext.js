import { createContext, useContext } from "react";

const BookItemContext = createContext();

export default BookItemContext;
export const useBookItemContext = () => useContext(BookItemContext);