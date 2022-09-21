import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
// import { AuthContext } from '../../context/CountContext'
// import { AuthContext } from '../../context/AuthContex'
//import { CountContext } from '../../context/CountContext'
export default function Navbar() {


  return (


    <header>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">Logo</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              </li>

              <li className="nav-item">
                <Link to="/about" className="nav-link" aria-current="page">About</Link>
              </li>

              <li className="nav-item">
                <Link to="/contact" className="nav-link" aria-current="page">Contact</Link>
              </li>

              <li className="nav-item">
                <Link to="/login" className="nav-link" aria-current="page">Login</Link>
              </li>

              <li className="nav-item">
                <Link to="/register" className="nav-link" aria-current="page">Reg</Link>
              </li>

              <li className="nav-item">
                <Link to="/dashboard" className="nav-link" aria-current="page">Dashboard</Link>
              </li>


              <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Hooks
                </button>
                <ul className="dropdown-menu">
                  <li><Link to="/hook/useState" className="dropdown-item">useState</Link></li>
                  <li><Link to="/hook/useEffect" className="dropdown-item">useEffect</Link></li>
                  <li><Link to="/hook/useRef" className="dropdown-item">useRef</Link></li>
                  <li><Link to="/hook/useMemo" className="dropdown-item">useMemo</Link></li>
                  <li><Link to="/hook/useContext" className="dropdown-item">useContext</Link></li>
                  <li><Link to="/hook/useReducer" className="dropdown-item">useReducer</Link></li>

                </ul>
              </li>


              {/* <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
            </ul>

            <div className="d-flex">
              <p className="mb-0 text-end text-white"> Hi Usman !</p>

            </div>

            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}


          </div>
        </div>
      </nav>

    </header>
  )
}
