import React, { useState } from 'react'

const MultipleField = () => {
    const [name, setName] = useState('')

    const [age, setAge] = useState('')
    return (
        <>
            {/* Multiple useState */}
            <div>
                <h1>Multiple useState</h1>
                <input type='text' name='name' onChange={(e) => setName(e.target.value)} placeholder='Enter the name' /><br />
                <input type='text' name='age' onChange={(e) => setAge(e.target.value)} placeholder='Enter the age' />
            </div>
            <table border={{ border: "1px solid" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{age}</td>

                    </tr>
                </tbody>

            </table>
        </>
    )
}

export default MultipleField