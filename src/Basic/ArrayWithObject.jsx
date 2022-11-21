import React from 'react'

const allData = [
    {
        name: 'Pavan',
        email: 'pavan@test.com',
        age: 23
    },
    {
        name: 'Praveen',
        email: 'praveen@test.com',
        age: 21
    },
    {
        name: 'Priyanka',
        email: 'priyanka@test.com',
        age: 20
    },
]
const ArrayWithObject = () => {
    return (
        <>
            <table border={{ border: '1px solid grey' }}>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Age
                        </th>
                    </tr>
                </thead>
                {
                    allData.map((data, index) => {
                        const { name, email, age } = data
                        return (
                            <tbody key={index}>
                                <tr>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{age}</td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>

        </>
    )
}

export default ArrayWithObject