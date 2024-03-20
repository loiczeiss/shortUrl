import React from "react";
import "../css/navDesktop.css";
import ShorthlyLogo from "../assets/logo.svg"
function NavDesktop() {
  return (
    <> 
      <article id="headerDesktopMainDiv">
        <section className="headerLeft">
          
          <img src={ShorthlyLogo} alt="ShorthlyLogo" />
        
          <div id="headerLinks">
            <p>Features</p> <p>Pricing</p>
            <p>Ressources</p>
          </div>
        </section>
        <section className="headerRight">
          <div>
            <button id="loginButton">Login</button>
            <button id="signUpButton">Sign Up</button>
          </div>
        </section>
      </article>
    </>
  );
}

export default NavDesktop;
