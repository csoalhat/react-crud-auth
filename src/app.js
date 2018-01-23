import React from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.scss';
import 'normalize.css/normalize.css';

import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addItem } from './actions/items';
import { setTextFilter } from './actions/filters';
import getVisibleItems from './selectors/items';

const store = configureStore();

store.dispatch(addItem( {description: 'This is description 1', amount:'this is amount 1'}));
store.dispatch(addItem( {description: 'This is description 2'}));
store.dispatch(addItem( {description: 'This is description 3', createdAt: '300'}));
store.dispatch(setTextFilter(''));

const state = store.getState();
const visibleItems = getVisibleItems(state.items, state.filters);

const jsx = ( 
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
