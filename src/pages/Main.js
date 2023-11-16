import { useLocation } from 'react-router-dom'
import './Main.css';
import SideBar from '../component/sideBar';
function Main(props) {

    const location = useLocation()

    return (
        <div className='mainContainer'>
            <SideBar/>
            <div style={{width:"100%",backgroundColor:"aqua",textAlign:"center"}}>
            <h4>{location.state.name}</h4>
            <p>this is main page</p>
            </div>
        </div>

    )
}

export default Main