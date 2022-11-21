import React, { useState } from 'react'


const Data = [
    { id: 1, name: 'user1' },
    { id: 2, name: 'user2' },
    { id: 3, name: 'user3' },
    { id: 4, name: 'user4' },
    { id: 5, name: 'user5' },
    { id: 6, name: 'user6' },
    { id: 7, name: 'user7' }
]

const Tagging = () => {

    const [user, setUser] = useState(Data)

    const handleDelete = (e) => {
        const newUser = user.filter(data => e !==  data.id)

        setUser(newUser)
    }
    return (
        <>
            <h2>Hello Tagging</h2>
            <table border={{ border: "1px solid grey" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th></th>
                    </tr>
                </thead>
                {
                    user.map((item) =>
                        <tbody key={item.id}>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>
                                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                                </td>
                            </tr>
                        </tbody>

                    )
                }


            </table>

        </>
    )
}

export default Tagging