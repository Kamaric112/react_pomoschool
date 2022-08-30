import React from 'react'

function HeaderButton({btnClass, btnId , handleClick,children}) {

  return (
            <button className={btnClass} id={btnId} onClick={handleClick}>{children}</button> )
}

export default HeaderButton