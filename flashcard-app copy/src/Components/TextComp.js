import React from 'react'

function TextComp({className,id,placeholder}) {
  return (
    <textarea className={className} placeholder={placeholder} id={id}></textarea>
  )
}

export default TextComp