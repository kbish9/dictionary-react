import React, { useState } from "react";
import axios from "axios";
import Result from "./Results";
import "./Search.css"

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
    <div className="container body">
        <h1>
          Dictionary
        </h1>
        <section>
      <form onSubmit={searching}>
        <input type="search" placeholder="Search for word..." onChange={handleKeyword} autoFocus={true}/>
      </form>  
      <div className="hint">
        Suggested words: rainbow, jump, musical...
      </div>
      </section>
      <Result results={results}/>
   
    <footer>
      <a href="https://github.com/kbish9/dictionary-react" target="_blank" rel="noreferrer">
       Open source 
      </a>
       <span> code by Kelsey Bishop
         </span>
    </footer>
    </div>
  
  )
}