import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import MakeAdmin from './components/auth/MakeAdmin'
import CreateProject from './components/projects/CreateProject'
import GestionLocations from './components/locations/gestionLocations'
import viewDailys from './components/Daily/viewDaily/viewDailys';
import editDaily from './components/Daily/editDaily/editDaily';
import DashCttoTiempos from './components/dashboard/DashCttoTiempos'
import DailyEnviado from './components/Daily/editDaily/DailyEnviado';
import DashCttoProg from './components/dashboard/DashCttoProg'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'component={DashCttoTiempos} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
            <Route path='/makeadmin' component={MakeAdmin} />
            <Route path='/viewDailys' component={viewDailys} />
            <Route path='/editDaily' component={editDaily} />
            <Route path='/gestionLocations' component={GestionLocations} />
            <Route path='/DashCttoTiempos' component={DashCttoTiempos} />
            <Route path='/DailyEnviado' component={DailyEnviado} />
            <Route path='/DashCttoProg' component={DashCttoProg} />



          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
