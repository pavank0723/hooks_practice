import React, { useRef, useState } from 'react'
function Practice() {
    const fNameRef = useRef('')
    const lNameRef = useRef('')

    const [countId, setCountId] = useState(0)
    const [data, setData] = useState([{
        id:countId,
        fName: '',
        lName: ''
    }])
    const allData = [...new Set(data)]
    const [myData, setMyData] = useState(allData)
    function submitForm(e) {
        e.preventDefault()
        setData(d =>{
            return [
                ...d,
                {
                id: countId,
                fName: document.getElementById('fname').value,
                lName: document.getElementById('lname').value
            }]
        })

        setCountId(
            countId + 1
        )
    }
    return (
        <>
            <h1>Uncontrolled Component</h1>
            <form onSubmit={submitForm}>
                <input ref={fNameRef} id='fname' type='text' placeholder='Please enter the first name' /><br /><br />
                <input ref={lNameRef} id='lname' type='text' placeholder='Please enter the last name' /><br /><br />
                <button >Submit</button>

            </form>
            <br />
            <table border={{ border: "1px solid grey" }}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    data.id === '' ? '': data.map((item,index) => {
                        return(
                            <tbody key={index}>
                            <tr>
                                <td>{item.fName}</td>
                                <td>{item.lName}</td>
                                <td>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                        )
                    })
                }
            </table>
        </>
    )
}

export default Practice