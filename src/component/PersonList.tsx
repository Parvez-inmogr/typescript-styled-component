import React from 'react'
type PersonNameProps={
    names:{
        first:string
        last:string
    }[]
}
export const PersonList = (props:PersonNameProps) => {
  return (
    <div>{props.names.map(name=>{
        return(
            <h2>{name.first} {name.last}</h2>
      
        )
    })}</div>
  )
}
