import React from "react";
import Synonyms from "./Synonyms";
import "./Search.css"

export default function Meaning(props){
    return (
      <ol className="meaning">
        <h3>
          {props.meaning.partOfSpeech}
        </h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
          <li key={index}>
            <div className="definition">
              {definition.definition}
            </div>
            <div className="example">
              {definition.example} 
            </div>
            <Synonyms synonyms={definition.synonyms}/>
          </li>
          )
        })}   
      </ol>
    )
}