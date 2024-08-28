import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <button onClick={handleCount}>{count}</button>
      </div>
    </>
  );
}

export default App;
