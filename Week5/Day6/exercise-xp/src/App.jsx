
import React, { Component } from "react";
import ErrorBoundary from "./ErrorBoundary";

// Exercice 1 : gestion des erreurs avec React Error Boundary

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }));
  };

  render() {
    if (this.state.counter === 5) {
      throw new Error("I crashed!");
    }

    return (
      <h1 onClick={this.handleClick} style={{ cursor: "pointer" }}>
        {this.state.counter}
      </h1>
    );
  }
}

// Exercice 2 : cycle de vie des composants
// Première partie sur les méthodes du cycle de vie

class Lifecycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("1. getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("2. shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("4. getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("5. componentDidUpdate");
  }

  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }));
  };

  render() {
    console.log("3. render");

    return (
      <div>
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.handleClick}>Increase</button>
      </div>
    );
  }
}

// Partie I : shouldComponentUpdate

class FavoriteColor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favoriteColor: "red"
    };
  }

  shouldComponentUpdate() {
    return true;
  }

  changeColor = () => {
    this.setState({
      favoriteColor: "blue"
    });
  };

  render() {
    return (
      <div>
        <h2>My favorite color is {this.state.favoriteColor}</h2>

        <button onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}

// Partie II : componentDidUpdate

class ColorUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favoriteColor: "red"
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        favoriteColor: "yellow"
      });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("after update");
  }

  render() {
    return (
      <div>
        <h2>My favorite color is {this.state.favoriteColor}</h2>
      </div>
    );
  }
}

// Partie III : getSnapshotBeforeUpdate

class SnapshotColor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favoriteColor: "red"
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        favoriteColor: "yellow"
      });
    }, 1000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("after update");
  }

  render() {
    return (
      <div>
        <h2>My favorite color is {this.state.favoriteColor}</h2>
      </div>
    );
  }
}

// Exercice 3 : démonstration du cycle de vie

class Child extends Component {
  componentWillUnmount() {
    alert("The component named Child Header is about to be unmounted.");
  }

  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

// Composant principal de l'application

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true
    };
  }

  deleteChild = () => {
    this.setState({
      show: false
    });
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>

        {/* Exercice 1 */}

        <h1>Exercise 1: React Error Boundary</h1>

        <p>
          <strong>Click on the numbers to increase the counters.</strong>
          <br />
          <strong>
            The counter is programmed to throw error when it reaches 5.
            This simulates a JavaScript error in a component.
          </strong>
        </p>

        <hr />

        {/* Première simulation */}

        <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>

        <p>
          These two counters are inside of the same error boundary.
          So if one crashes, both are affected.
        </p>

        <hr />

        {/* Deuxième simulation */}

        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>

        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>

        <p>
          These two counters are each inside of their own error boundary.
          So if one crashes, the other is not affected.
        </p>

        <hr />

        {/* Troisième simulation */}

        <BuggyCounter />

        <p>
          This counter is not inside of an error boundary.
          So if it crashes, all other components are deleted.
        </p>

        <hr />

        {/* Exercice 2 */}

        <h1>Exercise 2: Lifecycle</h1>

        <p>
          Click on the button to update the counter
          and observe the lifecycle methods in the console.
        </p>

        <Lifecycle />

        <hr />

        {/* Partie I */}

        <h2>Part I: shouldComponentUpdate</h2>

        <FavoriteColor />

        <hr />

        {/* Partie II */}

        <h2>Part II: componentDidUpdate</h2>

        <ColorUpdate />

        <hr />

        {/* Partie III */}

        <h2>Part III: getSnapshotBeforeUpdate</h2>

        <SnapshotColor />

        <hr />

        {/* Exercice 3 */}

        <h1>Exercise 3: Lifecycle #2</h1>

        {this.state.show && <Child />}

        <button onClick={this.deleteChild}>
          Delete Header
        </button>

      </div>
    );
  }
}

export default App;
