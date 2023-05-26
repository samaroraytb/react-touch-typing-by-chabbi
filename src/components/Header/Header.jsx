import "./header.css";
import { IoIosMail } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const clickedOnCustomText = () => {
    navigate('/custom-text', {replace: true});
  }

  return (
    <div className="main-header-container">
      <div className="header-title-logo">
        Touch Typing <span>by Shubham</span>
      </div>
      <div className="header-user-input-email">
        <button className="header-main-input-button" type="button" onClick={clickedOnCustomText}>
          Submit your text
        </button>
        <IoIosMail className="header-mail-icon" />
      </div>
    </div>
  );
};

export default Header;
