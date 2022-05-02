import React, { useState } from "react";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  
  function searching (event) {
    event.preventDefault();
    return (
    <h1>
      `${keyword}`
    </h1>
    )
  }  

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <form onSubmit={searching}>
        <input type="search" onChange={handleKeyword} autoFocus={true}/>
      </form> 
    </div>
  )
}