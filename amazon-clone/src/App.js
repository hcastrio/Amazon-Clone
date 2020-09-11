import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Orders from "./Orders";

const promise = loadStripe ('pk_test_51HPyOjFBfJibA50ZeeIWiu4faD7oDY2R9ePIcIjglFbaKeXmHhHno47gxeMjtRkAis3O4UWADlmG1U6qrNogqnXI00ucKZCAQb')

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth
      .onAuthStateChanged(authUser => {
        console.log('The user is -> ', authUser);

        if (authUser) {

          dispatch({ // shots user into the data layer
            type: 'SET_USER',
            user: authUser
          })

        } else {

          dispatch({ 
            type: 'SET_USER',
            user: null
          })
        }
      })
    }, []) 

    return (
      // BEM convention
      <Router>
        <div className="App">      
          <Switch>

            <Route path="/orders">
              <Orders />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>

            <Route path="/payment">
              <Header />
              <Elements stripe = {promise}>
                <Payment />
              </Elements>              
            </Route>

            <Route path="/">
              <Header />
              <Home />
            </Route>
            
          </Switch>
        </div>
      </Router>
    )
  }


export default App;
