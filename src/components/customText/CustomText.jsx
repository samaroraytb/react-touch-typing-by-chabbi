import Header from '../Header/Header'
import './customtext.css'
import { useDispatch } from 'react-redux'
import {setData} from '../../redux/actions/index'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CustomText = () => {
    const dispachFn = useDispatch();
    const navigate = useNavigate();
    const [userText, changeUserText] = useState('')

    const changedUserInput = event => {
        changeUserText(event.target.value)
    }

    const userTextSubmittion = () => {
        dispachFn(setData())
        navigate('/', {replace: true});
    }

    return(
        <>
        <Header />
        <div className='custom-text-main-bg'>
            <div className='custom-text-innner-bg'>
                <h1 className='custom-text-main-heading'>Provide Custom Text for Touch Typing</h1>
                <textarea onChange={changedUserInput} className='user-input-text-area' value={userText}></textarea>
                <button className='custom-text-button-style' type="button" onClick={userTextSubmittion}>Submit Text</button>
            </div>
        </div>
        </>
    )
}

export default CustomText