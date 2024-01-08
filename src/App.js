import AddItem from "./AddItem";
import Condent from "./Condent";
import Footer from "./Footer";
import Header from "./Header";
import Todo from "./Todo";
import React, { useState } from 'react'


function App(){
    function chose(){
        const fruits = ["Apple","Mango","Orange"];
        const random = Math.floor(Math.random()*3);
        return fruits[random];
    }
    const [items , setItems] = useState(
        [
        {    id:1,
            checked:true,
            item:"Sing a song"
        },
        {   id:2,
            checked:false,
            item:"Dancing"
        },
        {   id:3,
            checked:true,
            item:"Playing cricket"
        }
        ]
    )

    const [newItem , setNewItem] = useState("")

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id===id ? {...item,checked:!item.checked} : item)
        setItems(listItems)
        localStorage.setItem("todo-list", JSON.stringify(listItems))
    }
    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id!==id)
        setItems(listItems)
        localStorage.setItem("todo-list", JSON.stringify(listItems))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted")
    }
    return(
        <div>
            <p>I like {chose()}</p>
            <Condent/>
            <Header title = "Todo"/> 
            <AddItem 
                newItem = {newItem}
                setNewItem = {setNewItem}
                handleSubmit = {handleSubmit}
            />
            <Todo items = {items}
                  handleCheck = {handleCheck}
                  handleDelete = {handleDelete}
                  />
            <Footer length = {items.length}/>
            {/* component */}
            {/* rafce */}

            
            <Header title = "Todo"/> 
            <AddItem 
                newItem = {newItem}
                setNewItem = {setNewItem}
                handleSubmit = {handleSubmit}
            />
            <Todo items = {items}
                  handleCheck = {handleCheck}
                  handleDelete = {handleDelete}
                  />
            <Footer length = {items.length}/>
            {/* component */}
            {/* rafce */}

        
        </div>
    );
    
}
export default App;