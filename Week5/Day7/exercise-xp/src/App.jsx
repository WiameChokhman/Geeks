import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
import ColorLifecycle from './ColorLifecycle'; // Used for Exercise 2

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  };

  render() {
    if (this.state.counter === 5) {
      throw new Error('I crashed!');
    }
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}

function App() {
  return (
    <div style={{ padding: '20px' }}>
      {/* EXERCISE 1 */}
      <p>
        <b>
          Click on the numbers to increase the counters.
          <br />
          The counter is programmed to throw error when it reaches 5. This
          simulates a JavaScript error in a component.
        </b>
      </p>
      <hr />

      {/* Simulation 1: Two counters inside ONE ErrorBoundary */}
      <ErrorBoundary>
        <p>
          These two counters are inside the same error boundary. If one crashes,
          the error boundary will replace both of them.
        </p>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <hr />

      {/* Simulation 2: Each counter inside its OWN ErrorBoundary */}
      <p>
        These two counters are each inside of their own error boundary. So if
        one crashes, the other is not affected.
      </p>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <hr />

      {/* Simulation 3: Counter WITHOUT an ErrorBoundary */}
      <p>
        This counter is not inside of boundary. So if crashes, all other
        components are deleted.
      </p>
      <BuggyCounter />

      <hr />
      {/* EXERCISE 2 */}
      <ColorLifecycle />
    </div>
  );
}

export default App;