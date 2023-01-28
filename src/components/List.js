import React from 'react'
import {Listitem} from './Listitem';

export const List = (props) => {
  return (
    <div className="container">
     
     <Listitem list={props.list[1]}/>
    </div>
  )
}
