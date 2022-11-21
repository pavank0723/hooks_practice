import React, {forwardRef} from "react"
const UserRef = (props,ref) =>{
    return(
        <>
            <input type='text' ref={ref}/>
        </>
    )
}

export default forwardRef(UserRef)