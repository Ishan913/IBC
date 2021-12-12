import './App.css';
import AddDrawPopUp from './components/AddDrawPopUp';
import ReadyDraw from './components/ReadyDraw';
import ActiveDraw from './components/ActiveDraw';
import {useState} from 'react';

function App() {

  const [drawPopup,SetDrawPopup]=useState(false);

  return (
    <div className="App">
      <div class="navbar"> 
      <main>
        <a class="title">IBC Lottery</a>
        <button class="addDraw" onClick={() => SetDrawPopup(true)}><i class="fas fa-plus"></i> Add New Draw</button>
      </main>
        <AddDrawPopUp trigger={drawPopup} setTrigger={SetDrawPopup}>
        </AddDrawPopUp>
      </div>
      
      <div class="dashBoard">
        
        <div class="box1 tickets">
          <p class="box1title">Tickets in game</p>
          <p class="box1value">3 Tickets</p>
        </div>
        
        <div class="box1 bets">
          <p class="box1title">Bets Placed</p>
          <p class="box1value">2.4 eth</p>
        </div>

        <div class="box1 winnings">
          <p class="box1title">Winnings</p>
          <p class="box1value">1.1 eth</p>
        </div>

        <div class="box1 balance">
          <p class="box1title">Balance</p>
          <p class="box1value">22.45</p>
        </div>

      </div>

      <div class="lottery">
        <h1>Upcoming Draws</h1>

        <div class="drawsContainer">
          <ActiveDraw></ActiveDraw>
          <ReadyDraw></ReadyDraw>
          <ActiveDraw></ActiveDraw>        
        
        </div>
        
        <h1>Past Draws</h1>

        <div class="tableDiv">
          <table>
            <thead>
              <tr class="tableHeader">
                <th>ID</th>
                <th>Date</th>
                <th>Members</th>
                <th>Min Stake</th>
                <th>Your Stake</th>
                <th>Result</th>
                <th>Prize</th>
              </tr>
            </thead>
            <tbody>
              <tr class="tableEntry">
                <td>1024668</td>
                <td>9-10-21</td>
                <td>15</td>
                <td>0.100 eth</td>
                <td>0.200 eth</td>
                <td>WON</td>
                <td>1.200 eth</td>
              </tr>

              <tr class="tableEntry">
                <td>1024668</td>
                <td>9-10-21</td>
                <td>15</td>
                <td>0.100 eth</td>
                <td>0.200 eth</td>
                <td>WON</td>
                <td>1.200 eth</td>
              </tr>
              <tr class="tableEntry">
                <td>1024668</td>
                <td>9-10-21</td>
                <td>15</td>
                <td>0.100 eth</td>
                <td>0.200 eth</td>
                <td>WON</td>
                <td>1.200 eth</td>
              </tr><tr class="tableEntry">
                <td>1024668</td>
                <td>9-10-21</td>
                <td>15</td>
                <td>0.100 eth</td>
                <td>0.200 eth</td>
                <td>WON</td>
                <td>1.200 eth</td>
              </tr><tr class="tableEntry">
                <td>1024668</td>
                <td>9-10-21</td>
                <td>15</td>
                <td>0.100 eth</td>
                <td>0.200 eth</td>
                <td>WON</td>
                <td>1.200 eth</td>
              </tr><tr class="tableEntry">
                <td>1024668</td>
                <td>9-10-21</td>
                <td>15</td>
                <td>0.100 eth</td>
                <td>0.200 eth</td>
                <td>WON</td>
                <td>1.200 eth</td>
              </tr><tr class="tableEntry">
                <td>1024668</td>
                <td>9-10-21</td>
                <td>15</td>
                <td>0.100 eth</td>
                <td>0.200 eth</td>
                <td>WON</td>
                <td>1.200 eth</td>
              </tr><tr class="tableEntry">
                <td>1024668</td>
                <td>9-10-21</td>
                <td>15</td>
                <td>0.100 eth</td>
                <td>0.200 eth</td>
                <td>WON</td>
                <td>1.200 eth</td>
              </tr><tr class="tableEntry">
                <td>1024668</td>
                <td>9-10-21</td>
                <td>15</td>
                <td>0.100 eth</td>
                <td>0.200 eth</td>
                <td>WON</td>
                <td>1.200 eth</td>
              </tr><tr class="tableEntry">
                <td>1024668</td>
                <td>9-10-21</td>
                <td>15</td>
                <td>0.100 eth</td>
                <td>0.200 eth</td>
                <td>WON</td>
                <td>1.200 eth</td>
              </tr><tr class="tableEntry">
                <td>1024668</td>
                <td>9-10-21</td>
                <td>15</td>
                <td>0.100 eth</td>
                <td>0.200 eth</td>
                <td>WON</td>
                <td>1.200 eth</td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  );
}

export default App;
