// App.jsx
import "./App.css";
import Library from "./Library";

function App() {
  const books = [
    { id: 1, name: "Physics", price: 300 },
    { id: 2, name: "Biology", price: 300 },
    { id: 3, name: "Chemistry", price: 300 },
    { id: 4, name: "English", price: 300 },
  ];

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Vite + React</h1>
      <Library books={books} />
    </>
  );
}

export default App;
