import React from 'react'

type PersonData={
    name:{
        first: string;
        last: string;
    }
}

export const Person = (props:PersonData) => {
  return (
    <div>Name:{props.name.first}  {props.name.last} </div>
  )
}
