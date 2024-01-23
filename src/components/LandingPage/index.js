import './index.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'


const LandingPage = () => {
    return (
    <>
    <div className='bubble'>
        <ul>
        <li><a href="/"> <FontAwesomeIcon icon={faHome} color="#D2B48C"/></a></li>
        <li><a href="/contact"> <FontAwesomeIcon icon={faEnvelope} color="#D2B48C"/></a></li>
        <li><a href="/about"> <FontAwesomeIcon icon={faUser} color="#D2B48C"/></a></li>
        </ul>
    </div>
    {/* <nav>
        <NavLink exact='true' activeclassname='active' to='/'>
            <FontAwesomeIcon icon={faHome} color="#D2B48C"/>
        </NavLink>
        <NavLink exact='true' activeclassname='active' to='/about' className='about-link' >
            <FontAwesomeIcon icon={faUser} color="#D2B48C"/>
        </NavLink>
        <NavLink exact='true' activeclassname='active' to='/contact' className='contact-link' >
            <FontAwesomeIcon icon={faEnvelope} color="#D2B48C"/>
        </NavLink>
    </nav> */}
    </>
    )
}

export default LandingPage