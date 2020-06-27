// import React, { Component } from "react";
// import Ninjas from "./ninjas";

// class App extends Component {
//   state = {
//     ninjas: [
//       { name: "stevey stevenson", age: 85, belt: "supergreen", id: 1 },
//       { name: "freddie universe", age: 90, belt: "mustachebrown", id: 2 },
//       { name: "baby yoda 96", age: 69, belt: "graygris", id: 3 },
//     ],
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>My first React app!</h1>
//         <p>Welcome :D</p>
//         <Ninjas ninjas={this.state.ninjas} />
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import Ninjas from "./ninjas";
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "stevey stevenson", age: 85, belt: "supergreen", id: 1 },
      { name: "freddie universe", age: 90, belt: "mustachebrown", id: 2 },
      { name: "baby yoda 96", age: 9, belt: "graygris", id: 3 },
    ],
  };

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas,
    });
  };

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter((ninja) => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas: ninjas,
    });
  };
  render() {
    return (
      <div className="App">
        <h1>My first react app!</h1>
        <p>Welcome</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
