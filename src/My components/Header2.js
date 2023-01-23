import React from 'react'
import "../My components/Header2.css"

const header2 =() => 
{
    return (
  <div className='parent-div' style={{margin: "auto" }}>
    <nav className="navbar navbar-expand bg-warning mt-3 mb-3 sticky-top" >
   <div classNameName="container-fluid" >
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" text-light aria-current="page" href="/#">Medicines</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/#">Electronics</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/#">Shoes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/#">Clothes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/#">food</a>
        </li>
       </ul>
     
    </div>
  </div>

 </nav>
</div>
    );
};

export default header2;




