// use the else response and the catch  you can copy and  paste this stuff.  DO  NOT FORGET THE [] FOR THE INFINITE LOOP.

import { useEffect } from "react";

useEffect(() => {
  fetch('/api/v1/books.json')
  .then(response => {
    if (response.ok) {
      return response;
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
      throw(error);
    }
  })
  .then(response => response.json())
  .then(body => {
    let booksList = body.books;
    setBooks(booksList);
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`))
}, [])

export default useEffect