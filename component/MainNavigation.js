import { NavLink } from 'react-router-dom';
//import React from 'react';
import classes from './MainNavigation.modules.css';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                <li>
                <NavLink to="/" className={({ isActive }) =>
                    isActive ? classes.active : undefined } end>Home</NavLink>
                </li>
                <li>
                <NavLink to="/Instructor" className={({ isActive }) =>
                    isActive ? classes.active : undefined }>Instructor</NavLink>
                </li>
                <li>
                <NavLink to="Instructor/InstructorSignUp" className={({ isActive }) =>
                    isActive ? classes.active : undefined }>Instructor Sign Up</NavLink>
                </li>
                <li>
                <NavLink to="Instructor/InstructorSignIn" className={({ isActive }) =>
                    isActive ? classes.active : undefined }>Instructor Sign In</NavLink>
                </li>
                <li>
                <NavLink to="/UserSignUp" className={({ isActive }) =>
                    isActive ? classes.active : undefined }>User Sign Up</NavLink>
                </li>
                <li>
                <NavLink to="/Login" className={({ isActive }) =>
                    isActive ? classes.active : undefined }>Login</NavLink>
                </li>
                <li>
                <NavLink to="/UserList" className={({ isActive }) =>
                    isActive ? classes.active : undefined }>User List</NavLink>
                </li>
                <li>
                <NavLink to="/DummyUser" className={({ isActive }) =>
                    isActive ? classes.active : undefined }>Dummy User</NavLink>
                </li>
                <li>
                <NavLink to="DummyUser/DummyUserDetail" className={({ isActive }) =>
                    isActive ? classes.active : undefined }>Dummy User Detail</NavLink>
                </li>
                
                </ul>
            </nav>
        </header>
    );
}
export default MainNavigation;