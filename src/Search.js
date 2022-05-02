import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  
function handleResponse(response) {
console.log(response.data);
}

  function searching (event) {
    event.preventDefault();
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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