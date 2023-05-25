import "./header.css";
import {IoIosMail} from 'react-icons/io'

const Header = () => {
  return (
    <div className="main-header-container">
      <div className="header-title-logo">
        Touch Typing <span>by Shubham</span>
      </div>
      <div>
        <button className="header-main-input-button" type="button">
          Submit your text
        </button>
        <IoIosMail />
      </div>
    </div>
  );
};

export default Header;
