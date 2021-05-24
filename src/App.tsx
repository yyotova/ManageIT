import React from 'react';
import {
  BrowserRouter, Redirect, Switch, Route
} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup'
import Header from './components/Header';
import ManageITThemeProvider from './components/Theme';
import { CurrentUserProvider } from './contexts/CurrentUser';
import Projects from './pages/Projects';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <CurrentUserProvider>
        <ManageITThemeProvider>
          <Header />
          <Switch>
            <Route exact path="/" component={Projects} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/:id/dashboard" component={Dashboard} />
            <Redirect to="/" />
          </Switch>
        </ManageITThemeProvider>
      </CurrentUserProvider>
    </BrowserRouter>
  );
}

export default App;