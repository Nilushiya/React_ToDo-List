import React, { useState } from 'react'

const Condent = () => {

   const handleClick = () =>{
    console.log("Thanks for click me")
   }
   const handleClick1 = (e) =>{
    console.log(e.target.innerText);
   }
   const handleClick2 = (name) =>{
    console.log(`Thanks for click ${name}`)
   }



// useState Hook
   const [count , setCount] = useState(0);
   function incrementFanction(){
      setCount((prevCount) =>{return prevCount + 1})
} 
   function decrementFanction(){
  setCount((prevCount) =>{return prevCount - 1})
} 

  const [defaultVal , setValue] = useState("Mango")
  function changeClick(){
    const fruits = ["Apple","Mango","Orange"];
    const random = Math.floor(Math.random()*3);
    setValue(() =>{return fruits[random]})
  }


  const numbers = [-1,-2,0,1,2]
  const items = numbers.filter((n) => n>=0).map((n) =>{return n})
  console.log(items)

  return (
    <div>hi
        <button onClick={handleClick}>Click</button>
        <button onClick={(e) => handleClick1(e)}>Click</button>
        {/* sent parametee */}
        <button onClick={() => handleClick2('Nilu')}>Click</button>
        <p onDoubleClick={() => handleClick2('Nilus')}>Double</p>


        <p>I like {defaultVal}</p>
        <button onClick={changeClick}>Subcribe</button>


      <button onClick={incrementFanction}>+</button>
      <button onClick={incrementFanction}>+</button>
      <span>{count}</span>
      <button onClick={decrementFanction}>-</button>
    </div>
  )
}

export default Condent