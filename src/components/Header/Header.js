import "./header.css";
import {IoIosMail} from 'react-icons/io'

const Header = () => {
  return (
    <div className="main-header-container">
      <div className="header-title-logo">
        Touch Typing <span>by Shubham</span>
      </div>
      <div className="header-user-input-email">
        <button className="header-main-input-button" type="button">
          Submit your text
        </button>
        <IoIosMail className="header-mail-icon"/>
      </div>
    </div>
  );
};

export default Header;
