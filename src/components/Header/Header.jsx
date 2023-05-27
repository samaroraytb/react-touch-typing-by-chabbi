import "./header.css";
import { IoIosMail } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { BiReset } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { resetData } from "../../redux/actions/index";


const Header = () => {
  const navigate = useNavigate();
  const dispachFn = useDispatch();

  const clickedOnCustomText = () => {
    navigate("/custom-text", { replace: true });
  };

  const clickedOnReset = () => {
    dispachFn(resetData());
  };

  const email = "samaroraytb@gmail.com";

  return (
    <div className="main-header-container">
      <div className="header-title-logo">
        Touch Typing <span>by Shubham</span>
      </div>
      <div className="header-user-input-email">
        <button
          className="header-main-input-button"
          type="button"
          onClick={clickedOnCustomText}
        >
          Submit your text
        </button>
        <div className="header-icon-container">
        <BiReset size={30} onClick={clickedOnReset} />
        <a  href={`mailto:${email}`} className="header-mail-icon" style={{color: "white"}}>
          <IoIosMail className="header-mail-icon"/>
        </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
