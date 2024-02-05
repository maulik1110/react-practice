import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0);
  const newObj = {
    name: "maulik",
    age: 21
  }
  return (
    <>
      <h1 className="bg-green-500 text-black-900 p-5 rounded-xl mb-4">
        Tailwind Test
      </h1>

      <Card title="Maulik" buttontext="text me" any = {newObj}/>
      <Card title="Jivani" buttontext = "call me"/>
      
    </>
  );
}

export default App;
