import React, { Component } from 'react'
import axios from 'axios'

export default class TodoHeader extends Component {
  state = {
    todoName:''
  }
  changeToDoName = (e)=>{
    this.setState({
      todoName:e.target.value
    })
  }
   add = async (e)=>{
    //按回车添加
    if(e.code === 'Enter'){
      //空的不做添加处理
      if(!this.state.todoName.trim()){
        return
      }
      //使用json-serve发请求
      const res = await axios.post('http://localhost:8080/data',{
        name: this.state.todoName,
        done: false,
      })
      console.log('res',res);
      if(res.status == 201){
        this.setState({
          todoName: ''
        })
      }
    }
  }
  render() {
    return (
      <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={this.state.todoName}
            onChange={this.changeToDoName}
            onKeyUp={this.add}
            autoFocus
          />
        </header>
    )
  }
}
