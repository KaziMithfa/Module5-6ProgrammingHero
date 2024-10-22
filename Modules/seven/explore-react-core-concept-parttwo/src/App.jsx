import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Friends";

function App() {
  function handleClick() {
    alert("handle clicked");
  }

  const handleClick2 = () => {
    alert("button 2 is clicked");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h1>React Core concepts 2</h1>

      <Counter></Counter>

      <Friends></Friends>
      <Users></Users>

      <Team></Team>

      <button onClick={handleClick}>click me</button>

      <button onClick={handleClick2}>Click 2</button>

      <button
        onClick={() => {
          alert("third clicked");
        }}
      >
        Click 3
      </button>

      {/* vejailea */}

      <button onClick={() => addToFive(3)}>Four</button>
    </>
  );
}

export default App;
