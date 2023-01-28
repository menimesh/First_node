import React from 'react'
export const Listitem = ({list}) => {
  return (
    <div>
        <h4>{list.Name}</h4>
        <h5>{list.Address}</h5>
    </div>
  )
}
