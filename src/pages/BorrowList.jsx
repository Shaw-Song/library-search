import { useState, useEffect } from 'react';

function BorrowList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('borrowList')) || [];
    setList(stored);
  }, []);

  const removeBook = (key) => {
    const newList = list.filter((book) => book.key !== key);
    setList(newList);
    localStorage.setItem('borrowList', JSON.stringify(newList));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Borrow List</h2>
      <div className="grid grid-cols-3 gap-4">
        {list.map((book) => (
          <div key={book.key} className="border p-2">
            <h3 className="font-bold">{book.title}</h3>
            <p>{book.author_name?.join(', ')}</p>
            <button className="mt-2 bg-red-500 text-white px-2 py-1" onClick={() => removeBook(book.key)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BorrowList;
