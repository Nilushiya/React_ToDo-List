import AddItem from "./AddItem";
import Condent from "./Condent";
import Footer from "./Footer";
import Header from "./Header";
import SearchItem from "./SearchItem";
import Todo from "./Todo";
import React, { useState } from 'react'


function App(){
    function chose(){
        const fruits = ["Apple","Mango","Orange"];
        const random = Math.floor(Math.random()*3);
        return fruits[random];
    }
    const [items , setItems] = useState(
        JSON.parse(localStorage.getItem("todo-list"))
    )

    const [newItem , setNewItem] = useState("")
    const [search , setSearch] = useState("")

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
        if(!newItem) return;
        console.log("submitted")
        addItem(newItem)
        setNewItem("")
    }

    const addItem = (item) => {
        const id = items.length ? items[items.length -1].id + 1 : 1
        const addNewItem = {id , checked:false , item}
        const listItems = [...items ,addNewItem ]
        setItems(listItems)
        localStorage.setItem("todo-list", JSON.stringify(listItems))
    }
    return(
        <div   className="App"> 
            <p>I like {chose()}</p>
            <Condent/>
            <Header title = "Todo"/> 
            <AddItem 
                newItem = {newItem}
                setNewItem = {setNewItem}
                handleSubmit = {handleSubmit}
            />
            <SearchItem 
                search = {search}
                setSearch = {setSearch}
            />
            <Todo items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLocaleLowerCase()))}
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