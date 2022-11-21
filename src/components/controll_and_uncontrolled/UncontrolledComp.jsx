import React, { useRef,useState } from 'react'
function UncontrolledComp() {
    const fNameRef = useRef('')
    const lNameRef = useRef('')

    const [data, setData] = useState({
        fName : '',
        lName : ''
    })
    function submitForm(e) {
        e.preventDefault()
        setData({
            fName: fNameRef.current.value,
            lName: lNameRef.current.value
        })
        
    }
    return (
        <>
            <h1>Uncontrolled Component</h1>
            <form onSubmit={submitForm}>
                <input ref={fNameRef} type='text' placeholder='Please enter the first name' /><br /><br />
                <input ref={lNameRef} type='text' placeholder='Please enter the last name' /><br /><br />
                <button >Submit</button>

            </form>
            <br />
            <table border={{border: "1px solid grey" }}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{fNameRef.current.value}</td>
                        <td>{lNameRef.current.value}</td>
                        <td>
                            <button>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default UncontrolledComp