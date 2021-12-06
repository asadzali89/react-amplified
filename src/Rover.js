import React from 'react';
import './Rover.css';
import ReactPlayer from "react-player";
function Rover() {
  return (
    <div >
      <div class="rovertopContainer">
          <h1>Rover</h1>
          <p>ROSbot 2.0</p>
        </div>
      <div class="roverbox1">
        <section>
          <ReactPlayer width="100%" height="850px" border-radius="20px" url='https://www.youtube.com/watch?v=w0760fhEJOU&ab_channel=BostonandMaineLive'/>
        </section>
      </div>
      <div class="roverbox2">
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
      <div class="roverbox3">
        <section>
            <h3>Stats</h3>
        </section>
      </div>
      <div class="roverfoot">
        <footer>
            <p>Copyright &copy; 2021</p>
        </footer>
      </div>
    </div>
  );
}

export default Rover;
