import { createStore } from "redux";
import combineReducers from "../reducers/index";

// 将state保存在本地
const saveState = (state) =>{
  try{
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  }catch(error){ }
};

// 读取state本地数据
const loadState = () =>{
  try{
    const serializedState = localStorage.getItem('state');
    if(serializedState === null){
      return undefined;
    }else{
      return JSON.parse(serializedState);
    }
  }catch(error){
    return undefined;
  }
};

// 监听store数据变化以保存state（性能不好）
// store.subscribe(() =>{
//   const state = store.getState();
//   saveState(state);
// })

// 刷新或关闭页面则保存数据
window.onbeforeunload = (e) => {
  const state = store.getState();
  saveState(state);
};

const store = createStore(combineReducers, loadState());// 生成store状态树

export default store;