import React from "react";

import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './sideBar.css'

function SideBar() {

    const data = [
        {
            title: "Go to Home",
            icon: <HomeIcon/>,
            to: "/"
        },
        {
            title: "Settings",
            icon: <SettingsIcon/>,
            to: ""
        },
        {
            title: "More",
            icon: <MoreVertIcon/>,
            to: ""
        },
    ]

    return (

        <div className="sideBarContainer">
            <ul className="sideList">
                {data.map((item,index)=>{
                    return (
                        <li key={index} className="sideItem" onClick={()=>{window.location.pathname=item.to}}><div id="icon">{item.icon}</div><div id="title">{item.title}</div></li>
                    )
                })}
</ul>  

        </div>
    )

}

export default SideBar