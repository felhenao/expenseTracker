import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import { createBrowserHistory } from 'history'
  import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
  import AddExpensePage from '../components/AddExpensePage';
  import EditExpensePage from '../components/EditExpensePage';
  import NotFoundPage from '../components/NotFoundPage';
  import HelpPage from '../components/HelpPage';
  import LoginPage from '../components/LoginPage';
  import PrivateRoute from './PrivateRoute';
  import PublicRoute from './PublicRoute';
  import Header from '../components/Header';
  
export const history = createBrowserHistory();

const AppRouter = () => (
<Router history={history}>
    <div>
    <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
    </Switch>
    </div>
</Router>
);

<Router>
<div>
    <Header/>
    <Switch>
        <Route path="/" component={LoginPage} exact={true}/>
        <Route path="/dashboard" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
    </Switch>
</div>
</Router>

export default AppRouter;
