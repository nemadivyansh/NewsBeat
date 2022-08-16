import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
// import PropTypes from 'prop-types'

export default class App extends Component {
    //   static propTypes = {

    //   }

    render() {
        return (
            <div>
                <NavBar />
                <News pageSize = {15} />
            </div>

        )
    }
}

// export default App;
