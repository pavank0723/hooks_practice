import React from "react"
const Skill = ({ data }) => {
    
    return (
        <>
            <tbody>
                <tr>
                    <td>{data.category}</td>
                    <td>{data.icon}</td>
                </tr>
            </tbody>
        </>
    )
}

export default Skill