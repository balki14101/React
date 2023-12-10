import React from "react";

import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './sideBar.css'

function SideBar({children}) {

    const data = [
        
        {
            title: "Settings",
            icon: <SettingsIcon/>,
            to: "/sidebar/settings"
        },
        {
            title: "More",
            icon: <MoreVertIcon/>,
            to: "/sidebar/more"
        },
        {
            title: "Go to Home",
            icon: <HomeIcon/>,
            to: "/"
        },
    ]

    const wordloads = [
        
        {
            title: "Cron Jobs",
            icon: <SettingsIcon/>,
            to: "/sidebar/settings"
        },
        {
            title: "Daemon Jobs",
            icon: <MoreVertIcon/>,
            to: "/sidebar/more"
        },
        {
            title: "Deployments",
            icon: <HomeIcon/>,
            to: "/"
        },
        {
            title: "pods",
            icon: <HomeIcon/>,
            to: "/"
        },
        {
            title: "Replica sets",
            icon: <HomeIcon/>,
            to: "/"
        },
        {
            title: "Stateful sets",
            icon: <HomeIcon/>,
            to: "/"
        },
    ]

    const service = [
        
        {
            title: "Ingresses",
            icon: <SettingsIcon/>,
            to: "/sidebar/settings"
        },
        {
            title: "Services",
            icon: <MoreVertIcon/>,
            to: "/sidebar/more"
        },
    ]
    const Config = [
        
        {
            title: "Config maps",
            icon: <SettingsIcon/>,
            to: "/sidebar/settings"
        },
        {
            title: "Secrets",
            icon: <MoreVertIcon/>,
            to: "/sidebar/more"
        }, 
        {
            title: "Persistent volume claims",
            icon: <MoreVertIcon/>,
            to: "/sidebar/more"
        },
    ]
    const Cluster = [
        
        {
            title: "cluster Role Binding",
            icon: <SettingsIcon/>,
            to: "/sidebar/settings"
        },
        {
            title: "Cluster Roles",
            icon: <MoreVertIcon/>,
            to: "/sidebar/more"
        },{
            title: "Role Binding",
            icon: <SettingsIcon/>,
            to: "/sidebar/settings"
        },
        {
            title: "Roles",
            icon: <MoreVertIcon/>,
            to: "/sidebar/more"
        },{
            title: "Service Accounts",
            icon: <SettingsIcon/>,
            to: "/sidebar/settings"
        },
      
    ]

    return (

    <div style={{ display: 'flex', height: '100%' , backgroundColor:"blue"}}>

        <div className="sideBarContainer">
            {/* <ul className="sideList">
                {data.map((item,index)=>{
                    return (
                        <li key={index} className="sideItem" onClick={()=>{window.location.pathname=item.to}}><div id="icon">{item.icon}</div><div id="title">{item.title}</div></li>
                    )
                })}
</ul>   */}
<ul className="sideList">
             
                <p>Wordloads</p>
                {wordloads.map((item,index)=>{
                    return (
                        <li key={index} className="sideItem" onClick={()=>{window.location.pathname=item.to}}><div id="icon">{item.icon}</div><div id="title">{item.title}</div></li>
                    )
                })}
                <p>Service</p>
                {service.map((item,index)=>{
                    return (
                        <li key={index} className="sideItem" onClick={()=>{window.location.pathname=item.to}}><div id="icon">{item.icon}</div><div id="title">{item.title}</div></li>
                    )
                })}
                <p>Config and Storage</p>
                {Config.map((item,index)=>{
                    return (
                        <li key={index} className="sideItem" onClick={()=>{window.location.pathname=item.to}}><div id="icon">{item.icon}</div><div id="title">{item.title}</div></li>
                    )
                })}
                <p>Cluster</p>
                {Cluster.map((item,index)=>{
                    return (
                        <li key={index} className="sideItem" onClick={()=>{window.location.pathname=item.to}}><div id="icon">{item.icon}</div><div id="title">{item.title}</div></li>
                    )
                })}
</ul>  

        </div>

        <div style={{padding: '20px',backgroundColor:"lightcoral",height:"100%",width:"100%" }}>
        {children}
      </div>
      </div>
    )

}

export default SideBar