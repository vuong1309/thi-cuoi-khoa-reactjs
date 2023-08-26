import { NavLink } from 'react-router-dom';
import './Navbar.css';

const activeClass = (params) => {
    return params.isActive ? "active-item" : ""
}

const Navbar = () => {
    return (
        <div className='navbar'>
            <NavLink to="/" className={activeClass}>All</NavLink>
            <NavLink to="/active" className={activeClass}>Active</NavLink>
            <NavLink to="/completed" className={activeClass}>Completed</NavLink>
        </div>
    )
}


export default Navbar;