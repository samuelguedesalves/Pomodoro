import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import Logo from './assets/logo-x1.png';


//welcome component
import Welcome from './components/welcome/index';

//first steps component
import FirstSteps from './components/firt-steps/index';

//app component
import Application from './components/application/index';

class App extends React.Component  {
  constructor(props){
    super(props);
    this.state={

    }
  }

  render(){
    return (
      <div className="App">
          
        <div className="header">
          <img src={Logo} alt="Pomodoro"/>
        </div>

        <div className="userAlert">
            <p>
                Sorry! this web application is not suported in smartphone.
            </p>
        </div>

        <div className="applicationContainer" >
          <BrowserRouter>
              <Switch>
                <Route exact path='/' component={Welcome} />
                <Route path='/steps' component={FirstSteps} />
                <Route path='/app' component={Application} />
                <Redirect to='/' />
              </Switch>
          </BrowserRouter>
        </div>

      </div>
    );
  }
}

export default App;
