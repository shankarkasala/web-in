import React, { useContext } from 'react'
import './menu.css'
import { globalContext, sectionType } from '../GlobalContext/GlobalContext'
function Menu(props) {
    const {mode,handleSection} = useContext(globalContext)
    const handleSelect = (type) => {
        handleSection(type)
        props.onChange(!props.menu)
    }
  return (
    <div className={`menuContainer ${mode && 'darkMenu'}`}>
        <div onClick={()=>handleSelect(sectionType.Home)}>Home</div>
        <div onClick={()=>handleSelect(sectionType.Projects)}>Projects</div>
        <div onClick={()=>handleSelect(sectionType.About)}>About</div>
        <div onClick={()=>handleSelect(sectionType.Contact)}>Contact</div>
    </div>
  )
}

export default Menu