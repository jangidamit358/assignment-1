import React from "react";
import "./style.css";
import Latest from "./components/Latest";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import {Routes,Route} from "react-router-dom"

import Navbar from "./components/navbar";
import Void from "./components/void";
import Trending from "./components/trending";
import Temple from "./components/temple";
import Popular from "./components/popular";
import Ganasis from "./components/ganasis";
import Bayc from "./components/bayc";
export default function App() {
  return (
    <div style={{ backgroundColor: "#fafafa", margin: "0px" }}>
      <div id="container">
        <h1>Live Spaces</h1>

        <p>
          All NFTs on Cyber either belong to or were minted by space creator.
        </p>
        <Navbar />
         <Routes>
           <Route path="/" element={<Latest/>}></Route>
           <Route path="/void" element={<Void/>}></Route>
           <Route path="/trending" element={<Trending/>}></Route>
           <Route path="/popular" element={<Popular/>}></Route>
           <Route path="/temple" element={<Temple/>}></Route>
           <Route path="/ganasis" element={<Ganasis/>}></Route>
           <Route path="/bayc" element={<Bayc/>}></Route>
         </Routes>

            </div>
    </div>
  );
}
