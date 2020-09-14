// import React, { createContext, useState } from 'react';
// // import uuid from uuid/v1;

// export const BookContext = createContext();

// const BookContextProvider = (props) => {
//     const [books, setBooks] = useState([
//         {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
//         {title: 'the final empire', author: 'brandon sanderson', id: 2}
//       ]);

     
//       const addBook = (title,author) => {
//         //   setBooks([...books,{title: title, author: author , id: uuid() }]);
//           setBooks([...books,{title: title, author: author , id: Math.floor(Math.random() * 4)}]);
//           console.log(title,author);
//       }


//       const removeBook = (id) => {
//           setBooks(books.filter( book => {
//             return  book.id !== id;
//           }));
//       }

//       return(
//           <BookContext.Provider value= {{books,addBook,removeBook}}>
//               {props.children}
//           </BookContext.Provider>
//       )
    

// }


// export default BookContextProvider;




import React, { createContext, useState } from 'react';
// import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
    {title: 'the final empire', author: 'brandon sanderson', id: 2},
  ]);
  const addBook = (title, author) => {
    // setBooks([...books, {title, author, id: uuid()}]);
          setBooks([...books,{title: title, author: author , id: Math.random()}]);
          console.log(title,author);


  };
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  }

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
}
 
export default BookContextProvider;