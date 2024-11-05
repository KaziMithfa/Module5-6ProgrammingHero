import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  // const products = [
  //   { title: "Cabbage", id: 1 },
  //   { title: "Garlic", id: 2 },
  //   { title: "Apple", id: 3 },
  // ];

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];

  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {product.title}
    </li>
  ));

  // const listItems = products.map((product) => (
  //   <li key={product.id}>{product.title}</li>
  // ));

  return (
    <>
      <h1>Vite + React</h1>
      <ul>{listItems}</ul>

      <h1>Counters that updated seperately</h1>

      <Button count={count} onClick={handleClick}></Button>
    </>
  );
}

export default App;
