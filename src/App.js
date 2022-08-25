import './App.css';
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from "react-router-dom";
import SiteWrapper from "./components/SiteWrapper"

function App() {
    return (
        <BrowserRouter>
            <SiteWrapper />
        </BrowserRouter>
    )
}

export default App;