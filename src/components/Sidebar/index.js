import './index.scss'
import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import LOGO from '../../assets/images/logomaybe.png'
import {faDiagramProject, faEnvelope, faGamepad, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
        <img src={LOGO} alt='logo'/>
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color="#D2B48C"/>
            </NavLink>
            <NavLink exact='true' activeclassname='active' to='/about' className='about-link' >
                <FontAwesomeIcon icon={faUser} color="#D2B48C"/>
            </NavLink>
            {/* <NavLink exact='true' activeclassname='active' to='/game' className='game_page' >
                <FontAwesomeIcon icon={faGamepad} color="#D2B48C"/>
            </NavLink> */}
            <NavLink exact='true' activeclassname='active' to='/projects' className='project-link' >
                <FontAwesomeIcon icon={faDiagramProject} color="#D2B48C"/>
            </NavLink>
            <NavLink exact='true' activeclassname='active' to='/contact' className='contact-link' >
                <FontAwesomeIcon icon={faEnvelope} color="#D2B48C"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferer' href='https://www.linkedin.com/in/angel-cheng-a568391a2/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#D2B48C'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferer' href='https://github.com/angelhycc/aboutme'>
                    <FontAwesomeIcon icon={faGithub} color='#D2B48C'/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar