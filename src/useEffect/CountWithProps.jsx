import React, { useEffect } from 'react'
const CountWithProps = () =>{
    const [count, setCount] = React.useState(0)
    const [item, setItem] = React.useState(10)

    useEffect(() =>{
        console.log('render all time')
    })

    useEffect(() =>{
        console.log('render only once')
    },[])
    return(
        <>
            <UserCount count = {count} />
            <UserItem item = {item} />

            <button onClick = {() => setCount(count + 1)}>Update count</button>
            <button onClick = {() => setItem(item + 1)}>Update item</button>

        </>
    )
}

const UserCount = ({count}) =>{
    useEffect(() =>{
        console.log('count: when update')
    },[count])
    return(
        <>
            <h1>Count: {count}</h1>
        </>
    )
}

const UserItem = ({item}) =>{
    useEffect(() =>{
        console.log('item: when update')
    },[item])
    return(
        <>
        <h1>Item : {item}</h1>
        </>
    )
}

export default CountWithProps