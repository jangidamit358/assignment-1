import React from "react";
// import "./style.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div id="navbar">
      <Link className="btn" to="/">
        Latest shows
      </Link>
      <Link className="btn" to="/trending">
        24h Trending
      </Link>
      <Link className="btn" to="/popular">
        Most Popular
      </Link>
      <Link className="btn" to="/ganasis">
        In Ganasis
      </Link>
      <Link className="btn" to="/temple">
        In Temple
      </Link>
      <Link className="btn" to="/void">
        In Void
      </Link>
      <Link className="btn" to="/bayc">
        #BAYC
      </Link>
    </div>
  );
}
