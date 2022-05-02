import React, { useState } from "react";
import axios from "axios";
import Result from "./Results";
import Photos from "./Photos";
import "./Search.css"

export default function Search() {
  const [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0])
  }
  function handlePexelsReponse(response){
    setPhotos(response.data.photos)
  }

  function searching (event) {
    event.preventDefault();
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey = "563492ad6f9170000100000181a161a9540a4e518ff0328a12b12065";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
   let headers = {Authorization: `Bearer ${pexelsApiKey}`}
    axios.get(pexelsApiUrl, { headers: headers}).then(handlePexelsReponse);
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
      <Photos photos={photos}/>
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