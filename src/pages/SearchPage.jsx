import { useState } from 'react';
import axios from 'axios';

function SearchPage() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const searchBooks = async () => {
    const res = await axios.get(`https://openlibrary.org/search.json?q=${query}`);
    setBooks(res.data.docs);
  };

  const addToList = (book) => {
    const existing = JSON.parse(localStorage.getItem('borrowList')) || [];
    localStorage.setItem('borrowList', JSON.stringify([...existing, book]));
  };

  return (
    <div className="relative flex w-full gap-2 md:w-max">
      <input
        type="text"
        className="pr-20"
        color="white"
        placeholder="Book title or author"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
            size="sm"
            color="white"
            className="!absolute right-1 top-1 rounded"
            onClick={searchBooks}
            >
            Search
      </button>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {books.map((book) => (
          <div key={book.key} className="border p-2">
            {book.cover_i ? (
              <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title} />
            ) : <div className="h-48 bg-gray-200 flex items-center justify-center">No Cover</div>}
            <h3 className="font-bold">{book.title}</h3>
            <p>{book.author_name?.join(', ')}</p>
            <p>{book.first_publish_year}</p>
            <button className="mt-2 bg-green-500 text-white px-2 py-1" onClick={() => addToList(book)}>Add To List</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;