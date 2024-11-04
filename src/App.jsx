import React from 'react'

const App = () => {
  function func1(){
    alert('click Button was clicked!')
  }
  return (
    <>
      <h1>Alert Button Example</h1>
      <button onClick={()=>func1()}>Click</button>
    </>
  )
}

export default App
