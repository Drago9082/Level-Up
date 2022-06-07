import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <h1>Level Up!</h1>
        </Link>
      </h1>
    </header>
  );
}

export default Nav;
