import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
// import PropTypes from 'prop-types'

export class App extends Component {
  //   static propTypes = {

  //   }

  render() {
    return (
      <div>
        
        <NavBar />

        <div className="container my-3">
            <h1 className="text-center mb-5"> <u>Taaza-Akhbaar - Top Headlines</u></h1>
          <News pageSize = {15} />
        </div>
      </div>
    );
  }
}

export default App;
