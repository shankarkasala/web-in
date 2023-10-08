import React, { useContext } from "react";
import profile from "../../Assets/profile.png";
import lightProfile from "../../Assets/lightprofile.png";
import shape from '../../Assets/graph.png'
import "./home.css";
import { Button, Typography } from "@mui/material";
import { globalContext } from "../GlobalContext/GlobalContext";

function Home() {
  const { mode } = useContext(globalContext);
  return (
    <div>
      <div className={`photoContainer ${!mode && 'darkPhoto'}`}>
       
        <div className="photo">
          {mode ? (
            <img className="profile" src={profile} alt="profile" />
          ) : (
            <img className="profile" src={lightProfile} alt="profile" />
          )}
        </div>
        <Typography variant="h3" sx={{fontWeight:700}}> Hay there,</Typography>
        <Typography >I build things that live on internet</Typography>
      </div>
      <div className="homeText">
        <button className="button">Hair Me</button>
      </div>
    </div>
  );
}

export default Home;
