import React from 'react'
import { useSelector } from "react-redux";
import './body.css'
// useDispatch
function Body() {

  const selectorObject = useSelector(
    reducer => reducer.textData
  );

  return (
    <div className='body-main-container'>
      <div className='inside-container-body'>
        <p className="demo-data-body">{selectorObject}</p>
        <input type="text" className="body-user-input" />
      </div>
    </div>
  )
}

export default Body