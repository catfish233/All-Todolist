import React, { Component }from "react";
import store from "../store";
import Item from "./Item";
import '../css_style/Todolist.css'

export default class Todolist extends Component{
  constructor(props){
    super(props);
    this.state = { flag:"All", todos: store.getState().todoReducer };

    // 监听store数据变化
    store.subscribe(()=>{
      this.setState({
        todos: store.getState().todoReducer
      })
    })
  }
  
  // 分类显示标志
  handleClick(flag){
    return()=>{
      this.setState({flag: flag})
    }
  }

  render(){
    const {todos, flag} = this.state;
    const actives = todos.filter((todo) =>{
      return todo.done === false;// 获取未完成的todo项
    })
    return(
        <div className="Todolist_div">
          {
            todos.map((todo) => {
              return <Item key={todo.id} {...todo} flag={flag}
              />//遍历数组，显示Item组件的内容
            })
          }
          {
            actives.length > 1 ?
            <p id="length">{actives.length} items left</p>
            : <p id="length">{actives.length} item left</p>// 显示未完成todo项的数量
          }
          {/* 分类显示按钮 */}
          <button className='sort' id='All' onClick = {this.handleClick('All')} >All</button>
          <button className='sort' id='Active' onClick = {this.handleClick('Active')} >Active</button>
          <button className='sort' id='Completed' onClick = {this.handleClick('Completed')} >Completed</button>
        </div>
      )
  }
}