import React from "react";
import uniselllogo from "/home/bansal/Desktop/unisell/src/My components/Logo.png";


const header1 = () => {
  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid" >
        <li>
            <uniselllogo/>
        </li>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            English
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/#">Action</a></li>
            <li><a class="dropdown-item" href="/#">Another action</a></li>
            <li><a class="dropdown-divider" href="/#">dsfkjonm</a></li>
            <li><a class="dropdown-item" href="/#">Something else here</a></li>
          </ul>
        </li>

        <li className="nav-item">
          <button type="button" class="btn btn-success">
            Login
          </button>
          <button type="button" class="btn btn-warning">
            SELL
          </button>{" "}
        </li>
      </div>
    </nav>
  );
};

export default header1;
