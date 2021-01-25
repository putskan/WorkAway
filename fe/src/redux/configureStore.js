import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducers';
import { apiMiddleware } from './middlewares';

export default function configureStore(initalState) {
    const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(rootReducer, initalState, componseEnhancers(applyMiddleware(apiMiddleware)));
}