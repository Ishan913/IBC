import './App.css';

function App() {
  return (
    <div className="App">
      <div class="navbar"> 
        <a class="title">IBC Lottery</a>
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

        <div class="box1 balance">
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
          
          <div class="drawBox">
            <p class="drawId">1024445 </p>
            <a class="drawl date"><i class="fas fa-clock"></i> 9-10-21 09:00</a>
            <a class="drawr people"> 2 <i class="fas fa-user-friends"></i></a>
            <p>
            <a class="drawl minAmount"><i class="fas fa-coins"></i> 0.10 eth</a>
            <a class="drawr totalPot">0.50 eth <i class="fas fa-trophy"></i></a>
            </p>
            <button class="stakeButton">Add Stake</button>
          </div>

          <div class="drawBox">
            <p class="drawId">1024445 </p>
            <a class="drawl date"><i class="fas fa-clock"></i> 9-10-21 09:00</a>
            <a class="drawr people"> 2 <i class="fas fa-user-friends"></i></a>
            <p>
            <a class="drawl minAmount"><i class="fas fa-coins"></i> 0.10 eth</a>
            <a class="drawr totalPot">0.50 eth <i class="fas fa-trophy"></i></a>
            </p>
            <button class="stakeButton">Add Stake</button>
          </div>

          <div class="drawBox">
            <p class="drawId">1024445 </p>
            <a class="drawl date"><i class="fas fa-clock"></i> 9-10-21 09:00</a>
            <a class="drawr people"> 2 <i class="fas fa-user-friends"></i></a>
            <p>
            <a class="drawl minAmount"><i class="fas fa-coins"></i> 0.10 eth</a>
            <a class="drawr totalPot">0.50 eth <i class="fas fa-trophy"></i></a>
            </p>
            <button class="stakeButton">Add Stake</button>
          </div>

        
        
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
