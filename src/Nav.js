import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Nav() {

    function signout(){
        //alert("signout");
        window.sessionStorage.clear();
        var elem = document.getElementById('usernamecognito');
        if(typeof elem !== null && elem !== 'undefined' ) {
            document.getElementById("usernamecognito").innerHTML = "";
        }
        window.location.replace("https://dev.d270qwykq8bhla.amplifyapp.com/");
    };
function goDroneandRover(){
    if(document.getElementById("usernamecognito").innerHTML != ""){
        document.getElementById("dronelink").className = "enableddronelink";
    }
}
  return (
    <div className="topnav">
        <nav>
            <div>
            <Link activeClassName="active" to={'/'}>
            <a >Home</a>
            </Link>
            </div>
            <div id="dronelink" className="disableddronelink">
            <Link activeClassName="active" to={'/rover'}>
            <a >Rover</a>
            </Link>
            </div> 
            <div id="roverlink" className="disableddronelink">
            <Link activeClassName="active" to={'/drone'}>
            <a >Drone</a>
            </Link>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Sign In/Sign Out ↓
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="https://demoapponetwothreefour.auth.us-east-2.amazoncognito.com/login?client_id=6s5kjbp5bu6s84m072git7ds5j&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https://dev.d270qwykq8bhla.amplifyapp.com/response">Login/Signup</a>
                    <a href="#" onClick={() => {
                        window.sessionStorage.clear();
                        document.getElementById("usernamecognito").innerHTML = "";
                        window.location.replace("https://dev.d270qwykq8bhla.amplifyapp.com/");
                        }}
                        >Signout</a>
                </div>
            </div>
            <div class="usernamenavbar">
                <label id="usernamecognito"></label>
            </div>
        </nav>
    </div>
    );
}

export default Nav;
