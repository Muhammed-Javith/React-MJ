import React from "react";
import { useState, useEffect } from "react";
const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data.slice(0, 5)));
 }, []);

  return (
    <>
    <h1>Custom Hook</h1>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
        <useFetch/>
    </>
  );
};
export default App
