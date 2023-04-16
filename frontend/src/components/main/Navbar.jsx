import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useUserContext } from '../../context/UserProvider';


const Navbar = () => {

    const { loggedIn, setLoggedIn, logout } = useUserContext();

    const showLoggedIn = () => {
        if (!loggedIn) {
            return (
                // <ul className="navbar-nav">
                <>
                    {/* <li className="nav-item"> */}
                        <NavLink className="nav-link" aria-current="page" to="/signin">

                            <button type="button" className="btn btn-primary me-3 mb-1">
                                Login
                            </button>
                        </NavLink>
                    {/* </li> */}
                    {/* <li className="nav-item"> */}
                        <NavLink className="nav-link" aria-current="page" to="/signup">
                            <button type="button" className="btn btn-primary me-3 mb-1">
                                SignUp
                            </button>
                        </NavLink>
                    {/* </li> */}
                </>
                // </ul >

            );
        }
    }

    const showLogout = () => {
        if (loggedIn) {
            return (
                <ul className="navbar-nav">
                    {/* // <li className="nav-item"> */}
                        {/* <button className="btn btn-danger ms-3" aria-current="page" onClick={logout}>
                        Logout
                    </button> */}
                        <button type="button" className="btn btn-primary me-3 mb-2" onClick={logout}>
                            LogOut
                        </button>
                    {/* // </li> */}
                </ul>
            );
        }
    }


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
                                    <NavLink className="nav-link" to="/homepage">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/pro_entry">
                                        Profile Entry
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/pro_list">
                                        Profile List
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/feedback">
                                        Feedback
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/all_details">
                                        All Details
                                    </NavLink>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/profile_check">
                                       Profile Check
                                    </Link>
                                </li> */}
                            </ul>

                            {/* Left links */}

                            {/* <div className="d-flex align-items-center"> */}


                            {/* <ul className="navbar-nav mb-2 mb-lg-0">

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
                            </ul> */}

                            {showLoggedIn()}
                            {showLogout()}

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