import React from 'react'
import Sidemenu from './Sidemenu'


const NevigationMenu = () => {
    return (
        <div style={{position:'fixed',zIndex:'10'}}>
            <Sidemenu style={{display:'inline-block'}}/>
        </div>
    )
}

export default NevigationMenu
