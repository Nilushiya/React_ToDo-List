import AddItem from "./AddItem";
import Condent from "./Condent";
import Footer from "./Footer";
import Header from "./Header";
import SearchItem from "./SearchItem";
import Todo from "./Todo";
import React, { useState , useEffect } from 'react'
import apiRequest from "./apiRequest";


function App(){
    const API_URL = 'http://localhost:3500/items'
    const [items , setItems] = useState(
        // JSON.parse(localStorage.getItem("todo-list") || [])
        []
    )
    const [newItem , setNewItem] = useState("")
    const [search , setSearch] = useState("")
    const [fetchError , setFetchError] = useState("null")
    const [isLoading , setIsLoading] =useState(true) 

    useEffect(() => {
        // JSON.parse(localStorage.getItem("todo-list"))
        const fetchItems = async () => {
            try{
                const response = await fetch(API_URL)
                if(!response.ok) throw Error("Data not received");
                const listItems = await response.json()
                console.log(listItems)
                setItems(listItems)
                setFetchError(null)
            }
            catch(err){
                setFetchError(err.message)
            }
            finally{
                setIsLoading(false)
            }
        }
        setTimeout(() => {(async () => await fetchItems())(),2000})
    }, [])





    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id===id ? {...item,checked:!item.checked} : item)
        setItems(listItems)
        // localStorage.setItem("todo-list", JSON.stringify(listItems))
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id!==id)
        setItems(listItems)
        // localStorage.setItem("todo-list", JSON.stringify(listItems))
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
        // localStorage.setItem("todo-list", JSON.stringify(listItems))

        const postOptions = {
            method : 'POST',
            headers : {
            'Condent-Type' : 'application/json'
            },
            body : JSON.stringify(addNewItem)
        }
        const result = apiRequest(API_URL,postOptions)
        if(result) setFetchError(result)
    }

    function chose(){
        const fruits = ["Apple","Mango","Orange"];
        const random = Math.floor(Math.random()*3);
        return fruits[random];
    } 



console.log('bhbgbyhu')


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
            <div>
                {isLoading && <p>Loding items</p>}
                {fetchError && <p>{`Error: ${fetchError}`}</p>}
                {!isLoading && !fetchError && <Todo items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLocaleLowerCase()))}
                  handleCheck = {handleCheck}
                  handleDelete = {handleDelete}
                />}
            </div>
            <Footer length = {items.length}/>
            {/* component */}
            {/* rafce */}

            
        
        </div>
    );
    
}
export default App;