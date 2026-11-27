
import { useState } from 'react';

function Phone() {

  // Part I: State variables
  const [brand, setBrand] = useState("Samsung");
  const [model, setModel] = useState("Galaxy S20");
  const [color, setColor] = useState("black");
  const [year, setYear] = useState(2020);

  // Part II: Change the color
  const changeColor = () => {
    setColor("blue");
  };

  return (
    <div>
      <h2>Exercise 3: Phone</h2>
      <h1>My phone is a {brand}</h1>
      <p>It is a {color} {model} from {year} </p>

      <button onClick={changeColor}>
        Change Color
      </button>
    </div>
  );
}

export default Phone;
