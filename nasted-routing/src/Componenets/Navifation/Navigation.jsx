import {Link} from 'react-router-dom'
import "./Navigation.css"
const Navigation = () => {
    return (
        <div className='nav-container'>
            <ul>
                <li>
                    <Link to={'/dashboard'} className='link' style={{textDecoration:"none"}}>Dashboard</Link>
                </li>
                <li>
                    <Link to={'profile'} className='link' style={{textDecoration:"none"}}>Profile</Link>
                </li>
                <li>
                    <Link to={'setting'} className='link' style={{textDecoration:"none"}}>Setting</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;