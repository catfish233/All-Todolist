import React, { Component } from 'react';
import { delTodo, togglerTodos, editTodo } from '../actions/action';
import store from '../store';
import '../css_style/Item.css'

class Item extends Component {
	constructor(props){
		super(props);
		this.state = {
			isEditing: false,
			name: props.name,
			date: props.date,
			id: props.id,
			done: props.done,
		}
	}

	// 改变todo项状态
	handleCheck = (id) =>{
		const action = togglerTodos(id);
		const date = new Date().toLocaleString();
		this.setState({date:date, done: !this.state.done});
		store.dispatch(action);//传给store更改状态的todo项的id
	}

	// 删除todo项
	handleDel = (id) =>{
		const action = delTodo(id);// type + id
		store.dispatch(action);//传给store删除的todo项的id
	}

	// 编辑todo项
	handleEdit = (id, done) =>{
		return (event) =>{
			const {keyCode, target} = event;
			const date = new Date().toLocaleString();
			if(keyCode !== 13) return;
			if(target.value === '') return alert('The input cannot be empty!');

			const newtodo = {id: id, name: target.value, done: done, date: date};// 封装
			const action = editTodo(newtodo);
			store.dispatch(action);
			this.setState({isEditing: false, date:date, name: target.value});// 更新组件状态
		}
	}

	render(){
		const {isEditing, name, date, id, done} = this.state;
		const {flag} = this.props;
		return (
			<li style={{
				display:((flag==='Active'? done: !done)&&(flag==='All'? null: true) )?'none':'block',
				opacity:done?'0.5':'1'
			}}>   
				<input type="checkbox" onChange={()=>{this.handleCheck(id)}} defaultChecked = {done} />
				<p id='Time'>{date}</p>{/* 设置为<p style={{opacity:done?'0.5':'1'}}>{time}</p>之后，复选框就不能点击 */}
				{
					isEditing ?
						<input className='input'
							autoFocus value={name}
							onKeyUp={this.handleEdit(id, done)}
							onChange={(e) => {
								this.setState({name: e.target.value,})
							}}
						/> :
						<p  className='text' style={{opacity:'1'}} 
							onDoubleClick={() => {
								this.setState({isEditing: true,});  
							}}
						>
							{name}
						</p>
				}
				<button className="del" onClick={()=>{this.handleDel(id)}} style={{opacity:'1'}}>X</button>
			</li>
  	)
	}
}

export default Item;