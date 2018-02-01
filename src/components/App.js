import React, { Component } from 'react';
import ListaContatos from './ListaContatos';
import AddContatos from './AddContatos';




class App extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    // console.log(firebase)
    return (
      <div>
        <AddContatos />
        <ListaContatos />
      </div>
    );
  }
}

export default App;
