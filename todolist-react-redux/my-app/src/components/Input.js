import React from 'react';
import { nanoid } from 'nanoid';
import { sendInput } from '../actions/action';
import store from '../store'
import Clock from './Clock';
import '../css_style/Input.css';

export default function Input(){

  function handleKeyUp(event){
    const {keyCode, target} = event;
    if(keyCode !== 13) return ; //当点击回车时才会传送value
    if(target.value.trim() === ''){
      alert('The input cannot be empty!');
      return;
    }
    const todoObj = { id:nanoid(), name:target.value, 
      done: false, date: new Date().toLocaleString()
    };//预处理，将输入封装为一个对象

    const action = sendInput(todoObj);// action = type + todoObj
    store.dispatch(action);
    target.value = "";
  }

  return (
    <div>
      <label>Todolist </label>
      <input onKeyUp = {handleKeyUp} type="text" 
            placeholder="What needs to be done?"
            autoComplete="off" 
      />
      <Clock />
    </div>
  )
}