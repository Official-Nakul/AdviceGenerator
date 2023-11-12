import { useEffect, useState } from "react";
import Card from "./components/Card";
import "./App.css";
function App() {
  const apiUrl = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState(JSON);
  const getData = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    setAdvice(data.slip);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Card data={advice} handleOnClick={getData} />
    </>
  );
}

export default App;
