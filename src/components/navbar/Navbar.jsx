import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);


  const photo = window.localStorage.getItem("userAvatar");
  const Nom = window.localStorage.getItem("userNom");
  const Prenom = window.localStorage.getItem("userPrenom");
  const role = window.localStorage.getItem("userRole");

  return (
    <div className="navbar">
      <div className="wrapper">

      <img
                    src={photo}
                    alt=""
                    className="itemImg"
                  />
                  
<h1 className="itemTitle">{Nom} {Prenom}</h1>
<span className="itemValue">{role}</span>

        {/* <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div> */}
        <div className="items">
         
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
         
          
          
          
      
        </div>
      </div>
    </div>
  );
};

export default Navbar;
