import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedcoffes = useLoaderData();
  const [coffes, setCoffes] = useState(loadedcoffes);

  return (
    <div className="m-20">
      <h1
        className="text-center text-6xl my-20
       text-center"
      >
        {coffes.length}
      </h1>

      <div className="grid md:grid-cols-2 gap-4">
        {coffes.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffes={coffes}
            setCoffes={setCoffes}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
