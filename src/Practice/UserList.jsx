import React from "react"
const UserList = ({ data, handleEditUser,handleDeleteClick }) => {
    const {id, name, age, profession } = data
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{age}</td>
                <td>{profession}</td>
                <td>
                    <button onClick={(e) => handleEditUser(e, data)}>Edit</button>
                    <button onClick={() => handleDeleteClick(id)}>Delete</button>
                </td>
            </tr>
        </>
    )
}

export default UserList