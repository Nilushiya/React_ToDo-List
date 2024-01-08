import React from 'react'

const Header = (props) => {
  return (
    <header style={{backgroundColor:'blue', textAlign:"center"}}>{props.title}</header>
  )
}
Header.defaultProps = {
  title : "Todo"
}
export default Header