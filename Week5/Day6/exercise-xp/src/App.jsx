
import React, { Component } from "react";
import ErrorBoundary from "./ErrorBoundary";

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
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

class App extends Component {
  render() {
    return (
      <div>
        <p>
          <strong>Click on the numbers to increase the counters.</strong>
          <br />
          <strong>
            The counter is programmed to throw error when it reaches 5.
            This simulates a JavaScript error in a component.
          </strong>
        </p>

        <hr />

        {/* Simulation 1 */}
        <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>

        <p>
          These two counters are inside of the same error boundary.
          So if one crashes, the other is not affected.
        </p>

        <hr />

        {/* Simulation 2 */}
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

        {/* Simulation 3 */}
        <BuggyCounter />

        <p>
          This counter is not inside of an error boundary.
          So if it crashes, all other components are deleted.
        </p>
      </div>
    );
  }
}

export default App;
