import React, { useContext } from 'react';
import { AuthContext } from '../Context/auth-context';

const HomeScreen = () => {
    const { user  } = useContext(AuthContext);

    return ( 

        <div className="home-screen-container">
            
            <div class="infoBoard">
                
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
            </div>
    );
}

export default HomeScreen