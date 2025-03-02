import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const coffeeData = useLoaderData();
  const [coffees, setCoffees] = useState(coffeeData);

  return (
    <>
      <div>
        <h1>{coffeeData.length}</h1>

        <div className="grid md:grid-cols-2 gap-4">
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
