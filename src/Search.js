import React, { useState } from "react";
import axios from "axios";
import Result from "./Results";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  
  function handleResponse(response) {
    setResults(response.data[0])
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
        <input type="search" placeholder="Search for word..." onChange={handleKeyword} autoFocus={true}/>
      </form> 
      <Result results={results}/>
    </div>
  )
}