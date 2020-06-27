// import React, { Component } from "react";

// class Ninjas extends Component {
//   render() {
//     console.log(this.props);
//     const { ninjas } = this.props;
//     const ninjaList = ninjas.map((ninja) => {
//       return (
//         <div className="ninja">
//           <div>Name: {ninja.name}</div>
//           <div>Age: {ninja.age}</div>
//           <div>Belt: {ninja.belt}</div>
//           <hr></hr>
//         </div>
//       );
//     });
//     return <div className="ninja-list">{ninjaList}</div>;
//   }
// }

// export default Ninjas;

import React from "react";

const Ninjas = (props) => {
  // console.log(props);
  const { ninjas } = props;
  const { deleteNinja } = props;
  const ninjaList = ninjas.map((ninja) => {
    if (ninja.age > 20) {
      return (
        <div className="ninja" key={ninja.id}>
          <div>Name: {ninja.name}</div>
          <div>Age: {ninja.age}</div>
          <div>Belt: {ninja.belt}</div>
          <button
            onClick={() => {
              deleteNinja(ninja.id);
            }}
          >
            Delete Ninja
          </button>
          <hr></hr>
        </div>
      );
    } else {
      return null;
    }
  });
  // const ninjaList = ninjas.map((ninja) => {
  //   return ninja.age > 20 ? (
  //     <div className="ninja" key={ninja.id}>
  //       <div>Name: {ninja.name}</div>
  //       <div>Age: {ninja.age}</div>
  //       <div>Belt: {ninja.belt}</div>
  //       <hr></hr>
  //     </div>
  //   ) : null;
  // });
  return <div className="ninja-list">{ninjaList}</div>;
};

export default Ninjas;
