
import Car from './Components/Car';
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color';

const carinfo = {
  name: "Ford",
  model: "Mustang"
};

function App() {
  return (
    <div>
      <h1>React Exercises</h1>

      <hr />
      <Car carInfo={carinfo} />

      <hr />
      <Events />

      <hr />
      <Phone />

      <hr />
      <Color />

    </div>
  );
}

export default App;
