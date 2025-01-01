import React from 'react'
import Input from './UI/Input'
import "./SearchBar.css"

const SearchBar = (props) => {
   
  return (
    <div className='searchField'>
        <label htmlFor="search">Search Note</label>
        <Input type="text" id="search" value={props.value} onChange={props.onChange}></Input>
    </div>
  )
}

export default SearchBar