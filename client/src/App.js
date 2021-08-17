import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [home, setHome] = useState("");

  useEffect(() => {
    axios
      .get("/home")
      .then((response) => {
        console.log(response);
        setHome(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const postName = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/post_name", { name });
      setName("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    axios
      .get("/example")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='App'>
      <h1>hello</h1>
      {home}
      <form onSubmit={postName}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}></input>
        <button type='submit'> SEND</button>
      </form>
    </div>
  );
}

export default App;
