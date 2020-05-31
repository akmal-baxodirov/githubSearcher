import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'


const Navbar =({ icon, title}) => {
        return (
            <nav className='navbar bg-dark'>
                <h1>
                    <i className={icon} />
                    {title}
                    </h1>
                    <ul className='nav'>
                        <li className='nav-link'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='nav-link'>
                            <Link to='/about'>About</Link>
                        </li>
                    </ul>
            </nav>
        )
}

Navbar.defaultProps = {
    title:' Github Finder',
    icon: 'fab fa-github'
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
