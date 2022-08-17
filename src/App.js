import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import PropTypes from 'prop-types'

export default class App extends Component {
    //   static propTypes = {

    //   }

    render() {
        return (

            <div>
                <Router>
                    <NavBar />

                    <Routes>
                        <Route exact path="/" element={<News key={""} pageSize={15} category="" />} />
                        <Route exact path="/business" element={<News key={"Business"} pageSize={15} category="Business" />} />
                        <Route exact path="/entertainment" element={<News key={"Entertainment"} pageSize={15} category="Entertainment" />} />
                        <Route exact path="/general" element={<News key={"General"} pageSize={15} category="General" />} />
                        <Route exact path="/health" element={<News key={"Health"} pageSize={15} category="Health" />} />
                        <Route exact path="/science" element={<News key={"Science"} pageSize={15} category="Science" />} />
                        <Route exact path="/sports" element={<News key={"Sports"} pageSize={15} category="Sports" />} />
                        <Route exact path="/technology" element={<News key={"Technology"} pageSize={15} category="Technology" />} />

                    </Routes>
                </Router>

            </div>

            // <div>
            //     <NavBar />
            //     <News pageSize = {15} category = ""/>
            // </div>


        )
    }
}

// export default App;
