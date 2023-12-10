import { Route, Routes, useLocation, Switch, Outlet } from 'react-router-dom'
import './Main.css';
import SideBar from '../component/sideBar';
import Settings from './Settings';
import More from './More';
import Content from './content';
function Main({ data }) {

    const location = useLocation()

    return (
        <div className='mainContainer'>
            {/* <SideBar />

            <div style={{ width: "100%", backgroundColor: "aqua", textAlign: "center" }}>
                <Content data={location.state.name} />

            </div> */}
            <SideBar>
            
                <Outlet />
              
            </SideBar>
        </div>

    )
}

export default Main