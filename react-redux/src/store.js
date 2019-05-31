import {createStore} from 'redux';
import reducer from './reducer';
// reducer  
let initialState = {
    count:12
};
// createStore创建store 第一个参数reducer 第二个参数初始state
let store = createStore(reducer,initialState);

export default store;