import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { connectRouter } from 'connected-react-router'
import rootReducer from './reducers';

const loggerMiddleware = createLogger();
export const history = createHistory()

export default createStore(
  connectRouter(history)(rootReducer),
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);
