import React from 'react'

const Footer = ({length}) => {
    const year = new Date();
    // const footerStyle = {color:"red" , backgroundColor:'black'}; 
  return (
    <footer className='footer'
    // style={footerStyle}
    >
      {length} List {length === 1 ? "item" : "items"} 
        Copyright @copy;
        <br></br> 
        {year.getFullYear()}
    </footer>
  )
 }


export default Footer