import React from 'react';
import './Home.css';
import myImage from './systemoverview.png';

function Home() {
    window.onload = function() {
        var getsession = window.sessionStorage.getItem("id_token");
        var id_split = getsession.split(".");
        var payload = id_split[1];
        var decodedStringAtoB = atob(payload);
        //alert(decodedStringAtoB);
        console.log(decodedStringAtoB);
        //alert(getsession);
        var obj = JSON.parse(decodedStringAtoB);
        //alert(obj.email);
        //alert(obj['cognito:username']);
        document.getElementById('usernamecognito').innerHTML =obj['cognito:username'];
        if(document.getElementById("usernamecognito").innerHTML != ""){
          document.getElementById("dronelink").className = "enableddronelink";
          document.getElementById("roverlink").className = "enableddronelink";
      }
    };
  return (
    <div >
        <div class="homeTopContainer">
            <h1>
                IoT Security and Computation Management
            </h1>
        <p>Asad Ali, Steven Hernandez, Austin Lehrmann, and Tony Vo</p>
        </div>
        <div class="homebox1">
            <section class="homesection">
                <h2>Project Objective</h2>
                <p>Our system has four main parts: the drones and rover, the website, the cloud computing architecture, and the blockchain architecture. The drones and rovers will be running the brunt of the blockchain code, with the webpage being able to tell the cloud computer to communicate in the network. The drones and rovers will communicate with the cloud computing architecture by sending all their data there, and the cloud computing system will make all that information available to the user through the webpage.</p>
            </section>
        </div>
        <div class="parent">
          <div class="child1">
            <section class="section">
                <h2>Project Information</h2>
                <p>This website requires that the user either already have an existing account or create an account in order to access the contents inside it. The pages of the website are as follows. The rover and drone page are both used to looke at the live video feed and stats of the systems.</p>
                <a href="https://demoapponetwothreefour.auth.us-east-2.amazoncognito.com/login?client_id=6s5kjbp5bu6s84m072git7ds5j&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https://dev.d270qwykq8bhla.amplifyapp.com/response">Login/Signup</a>
            </section>
          </div>
          <div class="child2">
              <img class="homeimage" src={myImage}></img>
          </div>
        </div>
        <div class="foot">
            <footer>
                <p>Copyright &copy; 2021</p>
            </footer>
        </div>
    </div>
  );
}

export default Home;
