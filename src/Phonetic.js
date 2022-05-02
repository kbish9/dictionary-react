import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  return (
    <div className="phonetic">
      <ReactAudioPlayer src={props.phonetic.audio} controls/>
      <span className="text">
         {props.phonetic.text}
      </span>
     
    </div>
  )
}