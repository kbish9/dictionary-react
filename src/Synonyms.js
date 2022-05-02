import React from "react";

export default function Synonyms(props) {
  if (props.synonyms){
    return (
      <div className="syonyms">
        {props.synonyms.map(function (synonym, index) {
          return ( 
            <span key={index}>
             Synonyms: {synonym}
            </span>
          )  
        })}
      </div>
    )
  } else {
    return null;
  }
}