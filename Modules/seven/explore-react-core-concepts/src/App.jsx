import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";

function App() {
  const actors = ["Sakib", "Raj", "Anny", "Tuku"];

  const singers = [
    { name: "Dr. Anny", age: 28 },
    { name: "Dr. Habib", age: 25 },
    { name: "Dr. Jewel", age: 20 },
  ];

  return (
    <>
      <h1>Vite + React</h1>

      {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}

      <Actor name={"Bappa Raj"}></Actor>

      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}

      {/* <Todo task="learn React" isDone={true}></Todo>
      <Todo task="Explore Core Concepts" isDone={false}></Todo>

      <Todo task="Try JSX" isDone={true}></Todo> */}

      {/* <Device name="Laptop"></Device>
      <Device name="Mobile" price = '55'></Device>
      <Person></Person>
      <Student grade = '7' score = '99'></Student>
      <Student grade = {12} score = "100"></Student>
      <Student grade = {10} score = {95}></Student>
      <Developer></Developer> */}
    </>
  );
}

function Device(props) {
  //console.log(props);
  return <h2>this Device:{props.name} </h2>;
}

function Person() {
  const age = 25;
  const money = 20;
  const person = { name: "Kazi Mithfa", age: 29 };
  return (
    <h3>
      I am a {person.name} with age: {age + money}
    </h3>
  );
}

const { grade, score } = { grade: "7", score: "59" };

function Student({ grade = 1, score = 0 }) {
  console.log(grade);
  console.log(score);
  return (
    <div className="student">
      <h3>This is a student</h3>
      <p>Class: {grade} </p>
      <p>Score: {score} </p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "20px",
  };

  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        border: "2px solid purple",
        borderRadius: "20px",
      }}
    >
      <h5>Demo Devo</h5>
      <p>Coding: </p>
    </div>
  );
}

export default App;
