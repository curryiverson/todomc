import React, { Component } from 'react'
import axios from 'axios'
import TodoHeader from './components/TodoHeader.jsx'
import TodoMain from './components/TodoMain.jsx'
import TodoFooter from './components/TodoFooter.jsx'

export default class App extends Component {
  state = {
    list : []
  }
  async componentDidMount(){
    this.getTodoList()
  }
  getTodoList = async ()=>{
    const res = await axios.get('http://localhost:8080/data')
    this.setState({
      list : res.data
    })
  }
  render() {
    return (
      <section className="todoapp">
        <TodoHeader getTodoList={this.getTodoList}></TodoHeader>
        <TodoMain list={this.state.list} getTodoList={this.getTodoList}></TodoMain>
        <TodoFooter></TodoFooter>
      </section>
    )
  }
}

