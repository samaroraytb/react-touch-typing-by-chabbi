import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import "./body.css";

function Body() {
  const selectorObject = useSelector((reducer) => reducer.textData);

  const [userTyped, updateTyped] = useState("")
  const [score, updateScore] = useState({ matchScore: 0, nonMatched: 0 })

  useEffect(() => {
    const isMatched = userTyped.charAt(userTyped.length - 1) === selectorObject[userTyped.length - 1]
    if(isMatched === true){
      updateScore({...score, matchScore: score.matchScore + 1})
    }else{
      updateScore({...score, nonMatched: score.nonMatched + 1})
    }
  }, [userTyped])

  const userTestStart = event => {
    updateTyped(event.target.value)
  }
  console.log(score)
  return (
    <>
      <Header />
      <div className="body-main-container">
        <div className="inside-container-body">
          <p className="demo-data-body">{selectorObject}</p>
          <textarea onChange={userTestStart} className="body-user-input" value={userTyped}></textarea>
          <p className="home-message-block">Doing Well Buddy!!</p>
        </div>
      </div>
    </>
  );
}

export default Body;
