import Header from '../Header/Header'
import './customtext.css'
import { useDispatch } from 'react-redux'
import { setData } from '../../redux/actions/index'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CustomText = () => {
    const dispachFn = useDispatch();
    const navigate = useNavigate();
    const [userText, changeUserText] = useState('')
    const [errorMsg, updateMsg] = useState(false)

    const changedUserInput = event => {
        updateMsg(false)
        changeUserText(event.target.value)
    }

    const goBackFromUser = () => {
        navigate('/', { replace: true });
    }

    const userTextSubmittion = () => {
        if (userText !== "") {
            updateMsg(false)
            dispachFn(setData(userText))
            navigate('/', { replace: true });
        }else{
            updateMsg(true)
        }
    }

    return (
        <>
            <Header />
            <div className='custom-text-main-bg'>
                <div className='custom-text-innner-bg'>
                    <h1 className='custom-text-main-heading'>Provide Custom Text for Touch Typing</h1>
                    <textarea onChange={changedUserInput} className='user-input-text-area' value={userText}></textarea>
                    <div>
                    <button className='custom-text-button-style' type="button" onClick={userTextSubmittion}>Submit Text</button>
                    <button className='custom-text-go-back-button' type="button" onClick={goBackFromUser}>Go back</button>
                    </div>
                    {errorMsg && <p className='error-message-custom-text'>*please provide some text data</p>}
                </div>
            </div>
        </>
    )
}

export default CustomText