import React from 'react';
import './App.css';
import NavBar from "../components/NavBar";
import {Route} from "react-router";
import MainPage from "./MainPage";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Route exact path="/" component={MainPage} />
        </div>
    );
}

export default App;
