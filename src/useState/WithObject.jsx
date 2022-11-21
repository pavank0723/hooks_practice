import React, { useState } from 'react'

const WithObject = () => {
    const [user, setUser] = useState({ id: 0, name: '', age: '' })

    const setUseres = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    
    return (
        <>
            <div>
                <h1>useState with object</h1>
                <input type='text' name='name' onChange={setUseres} placeholder='Enter the name' /><br />
                <input type='text' name='age' onChange={setUseres} placeholder='Enter the age' />
            </div>
            <table border={{ border: "1px solid" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td></td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>
                            <button>Delete</button>
                        </td>
                    </tr>
                </tbody>

            </table>
        </>
    )
}

export default WithObject