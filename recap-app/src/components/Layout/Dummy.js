import React from "react";
const Dummy = (props)=>{
    return <div>
        {console.log("dummy called")}
    </div>
}

export default React.memo(Dummy);