import React from 'react';
import './Drone.css';
import ReactPlayer from "react-player";
function Drone() {
  return (
    <div >
        <div class="dronetopContainer">
            <h1>Drone</h1>
            <p>Aurelia X6</p>
        </div>
        <div class="dronebox1">
          <section >
              <ReactPlayer width="100%" height="850px" border-radius="20px" url='https://www.youtube.com/watch?v=8KGXSjtS5pk&ab_channel=ILoveYouVenice'/>
          </section>
        </div>
        <div class="dronebox2">
          <section>
            <table>
              <tr>
                <th>Connection between the Rover and Drone</th>
              </tr>
              <tr>
                <td>Stable</td>
              </tr>
            </table>
          </section>
        </div>
        <div class="dronebox3">
          <section>
              <h3>Stats</h3>
          </section>
        </div>
        <div class="dronefoot">
          <footer>
              <p>Copyright &copy; 2021</p>
          </footer>
        </div>
    </div>
  );
}

export default Drone;