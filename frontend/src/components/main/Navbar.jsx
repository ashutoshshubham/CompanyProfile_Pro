import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>


            <>
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                    {/* Container wrapper */}
                    <div className="container">
                        {/* Navbar brand */}
                        <Link class="navbar-brand" to="homepage"><b>COMPANY PROFILE</b></Link>

                        {/* Toggle button */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#navbarButtonsExample"
                            aria-controls="navbarButtonsExample"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fas fa-bars" />
                        </button>
                        {/* Collapsible wrapper */}
                        <div className="collapse navbar-collapse" id="navbarButtonsExample">
                            {/* Left links */}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/homepage">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/pro_entry">
                                        Profile Entry
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/pro_list">
                                        Profile List
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/feedback">
                                        Feedback
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/all_details">
                                        All Details
                                    </Link>
                                </li>
                            </ul>
                            {/* Left links */}
                            {/* <div className="d-flex align-items-center"> */}


                            <ul className="navbar-nav mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <Link to='signin'>
                                        <button type="button" className="btn btn-primary me-3 mb-2">
                                            Login
                                        </button>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='signup'>
                                        <button type="button" className="btn btn-primary mb-2">
                                            Sign up for free
                                        </button>
                                    </Link>
                                </li>
                            </ul>


                            {/* <button type="button" className="btn btn-primary px-3 me-2">
                                Login
                            </button>
                            <button type="button" className="btn btn-primary me-3">
                                Sign up for free
                            </button>

                            </div> */}
                        </div>
                        {/* Collapsible wrapper */}
                    </div>
                    {/* Container wrapper */}
                </nav>
                {/* Navbar */}
            </>

        </div>
    )
}

export default Navbar