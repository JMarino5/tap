import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/msidebar.css'
import '../css/mainarea.css'

//The m-page sidebar.

const MSidebar = (props: any) => {

    return (
        <React.Fragment>
            <div className='Sidebar'>
                <div className='heading'>Tasks</div>
                <NavLink className='taskTitle' to ='mpageInv'>Inventory Editor</NavLink>
                <NavLink className='taskTitle' to = 'mpagesales'>Sales Data</NavLink>
            </div>
        </React.Fragment>
    )

}

export {
    MSidebar,
}