
import React from "react"

const ArrayRender =(props)=>{

console.log("array running")



const {items}= props;
    return(
        <div>
            { items.map(item=><li >{item} </li>)}
            {}
        </div>
    )
}

export default React.memo(ArrayRender)