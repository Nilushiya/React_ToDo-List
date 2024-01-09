import React from 'react'

const Header = (props) => {
  return (
    <header className='header'>{props.title}</header>
  )
}
Header.defaultProps = {
  title : "Todo"
}
export default Header