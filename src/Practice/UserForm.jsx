import React from "react"
import Data from './Data'
import { nanoid } from 'nanoid'
import UserList from "./UserList"
import AddNewUser from "./AddNewUser"
import EditUser from "./EditUser"

const UserForm = () => {
    const [userData, setUserData] = React.useState(Data)

    const [addFormData, setAddFormData] = React.useState({
        name: '',
        age: '',
        profession: ''

    })
    const [editFormData, setEditFormData] = React.useState({
        name: '',
        age: '',
        profession: ''
    })

    const [editUserId, setEditUserId] = React.useState(null)

    const handleAddFormChange = (e) => {
        e.preventDefault()

        const fieldName = e.target.getAttribute('name')
        const fieldValue = e.target.value

        const newFormData = { ...addFormData }

        newFormData[fieldName] = fieldValue
        setAddFormData(newFormData)
    }

    const handleEditFormChange = (e) => {
        e.preventDefault()

        const fieldName = e.target.getAttribute('name')
        const fieldValue = e.target.value

        const formData = { ...editFormData }
        formData[fieldName] = fieldValue
        setEditFormData(formData)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()

        const newUser = {
            id: nanoid(),
            name: addFormData.name,
            age: addFormData.age,
            profession: addFormData.profession
        }
        const newUsers = [...userData, newUser]
        setUserData(newUsers)
    }

    const handleEditFormSubmit = (e) => {
        e.preventDefault()

        const formData = {
            id: editUserId,
            name: editFormData.name,
            age: editFormData.age,
            profession: editFormData.profession
        }

        const updatedData = [...userData]

        const index = userData.findIndex((i) => i.id === editUserId)

        updatedData[index] = formData

        setUserData(updatedData)
        setEditUserId(null)
    }

    const handleEditUser = (e, userData) => {
        e.preventDefault()

        setEditUserId(userData.id)

        const formValues = {
            name: userData.name,
            age: userData.age,
            profession: userData.profession
        }
        setEditFormData(formValues)
    }
    const handleCancelClick = () => {
        setEditUserId(null)
    }

    const handleDeleteClick = (userId) => {
        const newUsers = [...userData]

        const index = userData.findIndex((i) => i.id === userId)

        newUsers.splice(index, 1)

        setUserData(newUsers)
    }

    return (
        <>
            <form onSubmit={handleEditFormSubmit}>
                <table border={{ border: '1px solid grey' }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Profession</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData.map((data, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        {
                                            editUserId === data.id
                                                ? <EditUser
                                                    editFormData={editFormData}
                                                    handleEditFormChange={handleEditFormChange}
                                                    handleCancelClick={handleCancelClick} />
                                                : <UserList
                                                    data={data}
                                                    handleEditUser={handleEditUser}
                                                    handleDeleteClick={handleDeleteClick}
                                                />
                                        }
                                    </React.Fragment>
                                )
                            })
                        }

                    </tbody>
                </table>
            </form>
            <br />
            <h3>Add New User</h3>
            <AddNewUser
                handleFormSubmit={handleFormSubmit}
                handleAddFormChange={handleAddFormChange}
            />

        </>
    )
}

export default UserForm