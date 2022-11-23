import React from "react"
const EditUser = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
    return (
        <>
            <tr>
                <td>
                    <input
                        type='text'
                        name='name'
                        required='required'
                        placeholder='Enter the name'
                        value={editFormData.name}
                        onChange={handleEditFormChange}
                    />
                </td>
                <td>
                    <input
                        type='text'
                        name='age'
                        required='required'
                        placeholder='Enter the age' 
                        value={editFormData.age}
                        onChange={handleEditFormChange}
                        />
                </td>
                <td>
                    <input
                        type='text'
                        name='profession'
                        required='required'
                        placeholder='Enter the profession' 
                        value={editFormData.profession}
                        onChange={handleEditFormChange}
                        />
                </td>
                <td>
                    <button type="submit">Save</button>
                    <button onClick={handleCancelClick}>Cancel</button>
                </td>
            </tr>
        </>
    )
}
export default EditUser