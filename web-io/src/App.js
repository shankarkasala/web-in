import darkmode from "./Assets/nightmode.png";
import day from "./Assets/day-mode.png";
import { useContext, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./App.css";
import Menu from "./Components/Menu/Menu";
import { globalContext } from "./Components/GlobalContext/GlobalContext";
import Container from "./Components/Container/Container";
import track from './Assets/audio.mp3'
function App() {
  const {mode,handleDarkmode} = useContext(globalContext)
  const [menu, setMenu] = useState(true);
  const handelMode = () => {
    let snd = new Audio(track)
    snd.play()
    handleDarkmode()
  };
  const handelMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className={mode ? "dayContainer" : "darkContainer"}>
      <div className="header">
        <div className="menu" onClick={handelMenu}>
          {menu ? (
            <MenuIcon
              className={`hamburger ${!mode && "darkHamburger"}`}
              sx={{ fontSize: "35px" }}
            />
          ) : (
            <CloseIcon
              className={`hamburger ${!mode && "darkHamburger"}`}
              sx={{ fontSize: "35px" }}
            />
          )}
        </div>
        <div className="mode" onClick={handelMode}>
          {mode ? (
            <img className="darkmode" src={darkmode} alt="darkmode" />
          ) : (
            <img className="darkmode" src={day} alt="darkmode" />
          )}
        </div>
        {!menu && <Menu menu={menu} onChange={setMenu} />}
        <div className={`container`}>
            <Container/>
        </div>
      </div>

      <div className={`footer ${!mode && 'darkFooter'}`}>
        <div className="copy">&copy; kasala.umasankar</div>
      </div>
    </div>
  );
}

export default App;
