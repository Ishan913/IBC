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
          
          <div class="draw">
            <p class="id">1024445 </p>

          </div>
        
        </div>
        
        <h1>Past Draws</h1>
      </div>
    </div>
  );
}

export default App;
