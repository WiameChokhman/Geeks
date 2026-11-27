import React, { Component } from 'react';

// Exercise 3 - Étape 2 & 3 : Composant enfant qui gère la phase Unmounting
class Child extends Component {
  componentWillUnmount() {
    alert('The component named Header is about to be unmounted.');
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}

class ColorLifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: 'red',
      show: true, // Exercise 3 - Étape 1 : propriété show initialisée à true
    };
  }

  // Exercise 2 - Part II : Timer qui passe la couleur à "yellow" après le montage
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 2000);
  }

  // Exercise 2 - Part I : Autorise ou bloque la mise à jour du rendu
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  // Exercise 2 - Part III : Exécuté juste avant la mise à jour du DOM
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('in getSnapshotBeforeUpdate');
    return null;
  }

  // Exercise 2 - Part II : Exécuté juste après la mise à jour du DOM
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('after update');
  }

  changeColor = () => {
    this.setState({ favoriteColor: 'blue' });
  };

  // Exercise 3 - Étape 5 : Passe show à false pour démonter <Child />
  deleteHeader = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        {/* --- Exercise 2 --- */}
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <button type="button" onClick={this.changeColor}>
          Change color to blue
        </button>

        <hr />

        {/* --- Exercise 3 --- */}
        {this.state.show && <Child />}
        <button type="button" onClick={this.deleteHeader}>
          Delete Header
        </button>
      </div>
    );
  }
}

export default ColorLifecycle;