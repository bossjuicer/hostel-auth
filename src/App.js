import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import { facebookProvider, googleProvider } from './config/authMethods';
import socialMediaAuth from "./services/auth";
import google from "./google.png"
import facebook from "./facebook.png";

//Added


function App() {

  const [login,loggedIn]=useState(false)
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    // console.log(res);
    loggedIn(true);
  }
  return (
    <div className="App">
      <div className="contain">
      <h3>Hostel Allocation</h3>
      <p>Please Sign-in</p>
      { !login ? <><button className="btn1" onClick={() => handleOnClick(googleProvider)}><img style={{width:"180px"}} src={google} />
      </button>
      
      <button className="btn1" onClick={() => handleOnClick(facebookProvider)}><img style={{width:"180px"}} src={facebook} /></button></>:<h1>Welcome</h1>}      </div>
    </div>
  );
}

export default App;
