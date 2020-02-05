import React from 'react';
import './search.styless.css';
export const SearchBox = ({placeholder, handleChange}) =>(
    <div className = "searchBox">
        <input
        type = 'search' 
        placeholder = {placeholder}
        onChange = {handleChange}/>
    </div>
)