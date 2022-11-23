import React from "react"
const AddNewUser = ( { handleFormSubmit, handleAddFormChange } ) => {
    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input
                    type='text'
                    name='name'
                    autoComplete="false"
                    placeholder='Enter the name'
                    required='Please enter the name'
                    onChange={handleAddFormChange}
                />
                <input
                    type='number'
                    name='age'
                    placeholder='Enter the age'
                    required='Please enter the age'
                    onChange={handleAddFormChange}
                />
                <input
                    type='text'
                    name='profession'
                    placeholder='Enter the profession'
                    required='Please enter the profession'
                    onChange={handleAddFormChange}
                />
                <button type='submit'>Add</button>
            </form>

        </>
    )
}

export default AddNewUser