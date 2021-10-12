import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Header';
// import "react-theme-toggle-button/dist/index.css";
import { ThemeProvider } from './Context/theme-context'
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import HomeScreen from './Screens/HomeScreen';
import { AuthProvider } from './Context/auth-context' 
import AuthRoute from './Components/Redirects/AuthRoute';
import ProtectedRoute from './Components/Redirects/ProtectedRoute';
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <ThemeProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
      <AuthProvider>
        <Router>
          <Header/>
            <div style={{marginTop: '100px', minHeight: 'calc(100vh - 100px)'}} className="pageContainer">
              <Switch>
                <AuthRoute path='/register' exact component={RegisterScreen}/>
                <AuthRoute path='/login' exact component={LoginScreen}/>
                <Route path='/' exact render={(props) => (
                  <HomeScreen {...props} />)
                }/>
              </Switch>
            </div>
          {/* <Footer/> */}
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
