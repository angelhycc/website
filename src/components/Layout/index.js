import Sidebar from '../Sidebar';
import DraggableElement from '../DraggableElement';
import { Outlet } from 'react-router-dom'
import IMG from '../../assets/images/logo1.png'

import './index.scss';

const Layout = () => {
    return (
    <div className='App'>
        <Sidebar/>
        <div className='page'>
            {/* <span className='tags top-tags'>&lt;body&gt;</span> */}
            <Outlet />
            {/* <span className='tags bottom-tags'>
                &lt;/body&gt;
                <br/>
                <span className='tags bottom-tag-html'>&lt;/html&gt;</span>
            </span> */}
        </div>
    </div>
    )
}

export default Layout