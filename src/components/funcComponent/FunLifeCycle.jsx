import React from 'react'

function FunLifeCycle() {
  const [count, setCount] = React.useState(0)
  return (
    <>
      <h1>funA: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </>
  )
}

export default FunLifeCycle