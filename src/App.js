import { useState } from "react";
import "./App.css";
import CalcButton from "./button";
import keyList from "./KeyList";
function App() {
  const [show, setShow] = useState("");
  const [oldComputation, setOldComputation] = useState([]);
  const whenClicked = (name) => {
    if (
      name === "1" ||
      name === "2" ||
      name === "3" ||
      name === "4" ||
      name === "5" ||
      name === "6" ||
      name === "7" ||
      name === "8" ||
      name === "9" ||
      name === "0" ||
      name === "*" ||
      name === "-" ||
      name === "x" ||
      name === "/" ||
      name === "%" ||
      name === "." ||
      name === "(" ||
      name === ")"
    ) {
      setShow(show + name);
    } else if (name === "=") {
      console.log(show);
      var result = "";
      try {
        result = eval(show);
      } catch (err) {
        result = "ERROR";
      }
      if (result !== "ERROR") {
        setOldComputation([...oldComputation, String(show + "=" + result)]);
      }
      setShow(result);
    } else if (name === "AC") {
      setShow("");
    }
  };
  return (
    <div className="App mx-auto my-5 max-w-xl">
      <div className="h-5 my-5">
        <h1 className="font-mono text-3xl">Calculation App</h1>
      </div>
      <div className="monitor h-20 bg-slate-300 my-3 items-center justify-end flex">
        <div className="text-right decoration-4 text-xl">{show}</div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {keyList.map((value, i) => (
          <CalcButton name={value} key={i} whenClicked={whenClicked} />
        ))}
      </div>

      <div className="mt-6 ">
        <h1 className="text-left bold text-2xl">Old computation:</h1>
        {oldComputation.map((value, i) => (
          <p className="text-xl text-left">{value}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
