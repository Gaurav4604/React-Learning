import { useState } from "react";

// simple functional component
const Home = () => {
  const [name, setName] = useState("Gaurav");
  const [age, setAge] = useState(19);
  let flag = false;

  const setStuff = () => {
      console.log(flag);
    if (flag) {
      setName("Pramod");
      setAge(48);
    } else {
      setName("Gaurav");
      setAge(19);
    }
    flag = !flag;
  };
  const handleClick = () => {
    setStuff();
  };

  return (
    <div className="home">
      <h1>Home Page</h1>
      <p>
        Hello I am {name}, my age is {age} years
      </p>
      <button onClick={handleClick}>Click Me</button>
      <br />
    </div>
  );
};

export default Home;
