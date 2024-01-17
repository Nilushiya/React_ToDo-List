import React from 'react'
import ItemList from './ItemList'


const Todo = ({items , handleCheck , handleDelete}) => {
   
  return (
    <> 
    {/* fracment */}
        {(items.length) ?(
        <ItemList 
        items = {items}
                  handleCheck = {handleCheck}
                  handleDelete = {handleDelete} 
        /> 
        
         ) : (
            <p>Your list is empty</p>
        )
} 
    </>
  )
}

export default Todo