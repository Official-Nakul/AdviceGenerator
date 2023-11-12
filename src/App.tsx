import { useEffect, useState } from "react";
import Card from "./components/Card";
import "./App.css";
function App() {
  const apiUrl = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState(Object);
  const getData = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    setAdvice(data.slip);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Card api_data={advice} handleOnClick={getData} />
    </>
  );
}

export default App;
