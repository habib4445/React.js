// Library.jsx
import "./App.css";

export default function Library({ books }) {
  return (
    <div className="library" style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>My National Library</h2>
      <p>Address:</p>
      <p>Book collection: {books.length}</p>

      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.name} — Price: {book.price} Tk
          </li>
        ))}
      </ul>
    </div>
  );
}
