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
import TaskForm from './pages/EditTaskForm';

function App() {
  return (
    <BrowserRouter>
      <CurrentUserProvider>
        <ManageITThemeProvider>
          <Header />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/:id/dashboard" component={Dashboard} />
            <Route exact path="/task" component={TaskForm} />
            <Redirect to="/projects" />
          </Switch>
        </ManageITThemeProvider>
      </CurrentUserProvider>
    </BrowserRouter>
  );
}

export default App;