import { createStore, applyMiddleware, compose } from "redux";
import reducer from './reducer'
import  ThunkMiddleware from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //conecta la extencion del navegador

const store = createStore(
    reducer, 
    composeEnhancer(applyMiddleware(ThunkMiddleware)) //permite hacer peticiones a un servidor 
);

export default store;