import React from 'react'
import { SearchProps } from '../../types/types'
import "./search.scss"

const Search = ({filters, filterChange} : SearchProps) => {
  return (
    <div>
     <input className="search" 
        type="text" placeholder="Search country..." value={filters} onChange={filterChange}/>           
    </div>
  )
}

export default Search