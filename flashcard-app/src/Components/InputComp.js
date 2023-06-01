

import React from 'react'

const InputComp=  (({className,id,placeholder,name})=> {
  return (
    
       <input className={className} placeholder={placeholder} id={id} name={name}></input>
  )
}
)

export default InputComp