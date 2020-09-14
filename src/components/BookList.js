import React, {useState, useContext} from 'react';
import BookDetails from './BookDetails';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {

   const {books} = useContext(BookContext);

    return books.length ? (
        <div className = "book-list">
            <ul>
                {books.map( book => {
                   return (<BookDetails key={book.id} book= {book} />)
                })}
            </ul>
        </div>
    ) : (
        <div className= "empty">We have no books to Read... Free Time</div>
    );
}
 
export default BookList;