import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
const state = store.getState();
const visibleExpenes = getVisibleExpenses(state.expenses, state.filters);

if (process.env.NODE_ENV !== 'production') {
    console.log('development mode');
} 

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>loading...</p>, document.getElementById('root'));

store.dispatch(startSetExpenses()).then(() => {
    
    ReactDOM.render(jsx, document.getElementById('root'));
})