import React, { useState} from "react";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import { MdRunningWithErrors } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import "./body.css";

function Body() {
  const selectorObject = useSelector((reducer) => reducer.textData);

  const [userTyped, updateTyped] = useState("");
  const [score, updateScore] = useState({ matchScore: 0, nonMatched: 0 });
  const [accuracy, updateAccuracy] = useState(0)

  const keyPressedUser = (event) => {
    const isMatched = event.key === selectorObject[userTyped.length];

    if (isMatched === true) {
      updateScore({ ...score, matchScore: score.matchScore + 1 });
    } else {
      updateScore({ ...score, nonMatched: score.nonMatched + 1 });
    }
  };

  const userTestStart = (event) => {
    updateTyped(event.target.value);
  };

  const calculateProgress = () => {
    let progress = 0;

    if (userTyped.length >= selectorObject.length) {
      progress = 100;
    } else {
      progress = (userTyped.length / selectorObject.length) * 100;
    }

    return progress.toFixed(2);
  };

  const calculateTheAccuracy = () => {
    const validScore = score.matchScore - score.nonMatched;
    const calucatePercentage = (validScore/selectorObject.length)*100;
    const toFixedTwo = calucatePercentage.toFixed(2);
    updateAccuracy(toFixedTwo);
  }
  
  return (
    <>
      <Header />
      <div className="body-main-container">
        <div className="inside-container-body">
          <p className="demo-data-body">{selectorObject}</p>
          <textarea
            id="#userTypedTextID"
            onKeyPress={keyPressedUser}
            onChange={userTestStart}
            className="body-user-input"
            value={userTyped}
          ></textarea>
          <div className="complete-body-res-container">
            <div className="body-result-icon-text-container">
              <MdRunningWithErrors className="body-error-icon" size={25} />
              <p className="body-res-text-style">
                Mistakes: <span>{score.nonMatched}</span>
              </p>
            </div>
            <div className="body-result-icon-text-container">
              <FaTasks className="body-task-icon" size={25} />
              <p className="body-res-text-style">
                Progress: <span>{calculateProgress()}%</span>
              </p>
            </div>
          </div>
          <div className="calculate-accuracy-button-container">
            <button onClick={calculateTheAccuracy} type="button" className="calculate-accuracy-button">Calculate Accuracy</button>
            <div className="body-res-calculate-accuracy-content-container">
              <AiFillCheckCircle className="body-check-icon" size={25} />
              <p className="body-res-text-style">
                Accuracy: <span>{accuracy}%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
