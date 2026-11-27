
import { useState, useEffect } from 'react';

function Color() {

  // Part I
  const [favoriteColor, setFavoriteColor] = useState("red");

  // Part II
  useEffect(() => {
    alert("useEffect reached");
    setFavoriteColor("yellow");
  }, []);

  // Part III
  const changeColor = () => {
    setFavoriteColor("blue");
  };

  return (
    <div>
      <h2>Exercise 4: useEffect</h2>

      <h1>My favorite color is {favoriteColor}</h1>

      <button onClick={changeColor}>
        Change Color
      </button>
    </div>
  );
}

export default Color;
