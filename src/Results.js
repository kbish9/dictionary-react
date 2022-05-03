import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Search.css";

export default function Result(props){
  if (props.results) {
    return(
    <div className="results">
      <section>
         <h2>
         {props.results.word}
      </h2>
      {props.results.phonetics
          .filter(function (phonetic) {
            return phonetic.audio;
          })
          .map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
     </section>
           {props.results.meanings.map(function (meaning, index) {
        return (
          <section key={index}>
            <Meaning meaning={meaning} />
          </section>
        );
      })} 
    </div>
    );
  } else {
    return null
  }
}