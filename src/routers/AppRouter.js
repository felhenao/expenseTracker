import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import  ExpenseDashboardPage  from '../components/ExpenseDashboardPage';
import  AddExpensePage  from '../components/AddExpensePage';
import  EditExpensePage  from '../components/EditExpensePage';
import  HelpPage  from '../components/HelpPage';
import  NotFoundPage  from '../components/NotFoundPage';
import { ProvideAuth, AuthButton, PrivateRoute, LoginPage } from '../actions/auth';

const AppRouter = () => (
    <ProvideAuth>
        <Router>
            <div>
                <AuthButton />
                <ul>
                    <li>
                        <Link to="/dashboard">dashboard</Link>
                    </li>
                    <li>
                        <Link to="/create">create</Link>
                    </li>
                    <li>
                        <Link to="/help">help</Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path="/">
                        <LoginPage />
                    </Route>

                    <PrivateRoute path="/dashboard">
                        <ExpenseDashboardPage />
                    </PrivateRoute>

                    <PrivateRoute path="/create">
                        <AddExpensePage />
                    </PrivateRoute>

                    <PrivateRoute path="/edit/:id">
                        <EditExpensePage />
                    </PrivateRoute>

                    <Route path="/help">
                        <HelpPage />
                    </Route>

                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </Router>
    </ProvideAuth>
);

export default AppRouter;