import React from "react";
import facebook from "../assests/fb-logo.svg"
import google from "../assests/google-logo.svg";
import twitter from "../assests/twiitter-logo.svg";

function Icons() {
  return (
    <>
      <div className="SocialIcons">
        <div className="icon">
          <img src={google} alt="google" />
        </div>
        <div className="icon">
          <img src={facebook} alt="facebook" />
        </div>
        <div className="icon">
          <img src={twitter} alt="twitter" />
        </div>
      </div>
     
    </>
  );
}

export default Icons;