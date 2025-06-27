import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";


// Props is used to make component reuseble
// from this component we can pass value to another component using props

function App() {
  const myObj = {
    name: "Naman",
    age: 23
  }
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-2xl ">
        Tailwind Test
      </h1>
      <Card username="ChaiAurCode" anotherObj = {myObj}/>
      <Card username="naman_ptdr" anotherObj = {myObj}/>
    </>
  );
}

export default App;
