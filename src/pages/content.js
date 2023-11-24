import { Route, Routes, useLocation } from 'react-router-dom'
import './Main.css';
import SideBar from '../component/sideBar';
import Settings  from './Settings';
import More from './More';
function Content({data}) {

    const location = useLocation()

    return (
            <div style={{width:"100%",backgroundColor:"aqua",textAlign:"center"}}>
            <h4>{data}</h4>
            <p>this is main page</p>
            
            </div> 
        

    )
}

export default Content