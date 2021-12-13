import React, { Component } from "react";
import FactoryContract from "./contracts/Factory.json";
import getWeb3 from "./getWeb3";
import AddDrawPopUp from './components/AddDrawPopUp';
import ReadyDraw from './components/ReadyDraw';
import ActiveDraw from './components/ActiveDraw';

import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null, drawPopup: false , Contracts: []};



  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = FactoryContract.networks[networkId];
      const instance = new web3.eth.Contract(
        FactoryContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, Contracts: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, Contracts } = this.state;

    // Stores a given value, 5 by default.
    
    const Arr= await Contracts.methods.getLotteries();

    // Get the value from the contract to prove it worked.
    const response = 0;

    // Update state with the result.
    this.setState({ Contracts: Arr });
    console.log(Arr);

  };

  setDrawPopup = (val) => {
    this.setState({
      drawPopup: val
    })
  }

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <div class="navbar"> 
        <main>
          <a class="title">IBC Lottery</a>
          <button class="addDraw" onClick={() => this.setDrawPopup(true)}><i class="fas fa-plus"></i> Add New Draw</button>
        </main>
          <AddDrawPopUp trigger={this.state.drawPopup} setTrigger={this.setDrawPopup}>
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
}

export default App;
