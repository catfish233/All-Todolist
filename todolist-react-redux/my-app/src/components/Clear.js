import React from "react";
import { clearTodo } from "../actions/action";
import '../css_style/Clear.css';
import store from "../store";

const Clear = ()=>{

  // 请求action，向store传‘clear_Todo’清空state
  const cleartodos = () =>{
    const action = clearTodo();
    store.dispatch(action);
  }
  
  return(
    <button id='Clear'
    onClick = {() =>cleartodos()}
    >
      Clear All 
    </button>
  )
}

export default Clear;