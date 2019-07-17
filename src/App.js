import React from 'react';
import Header from './Header.js';
import Main from './Main.js';


import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      results: []
    }
  }
  render(){
    return (
      <React.Fragment>
        <Header></Header>
        <Main> </Main>
      </React.Fragment>

    )
  }
}




export default App;
