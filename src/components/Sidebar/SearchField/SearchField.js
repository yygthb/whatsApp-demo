import React from 'react'

import './SearchField.css'

const SearchField = () => {
  return (
    <div className="search-field">
      <input
        type="text"
        className="search-field_input"
        placeholder="Search or start new chat"
      />
    </div>
  )
}

export default SearchField