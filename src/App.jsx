import React, { Component } from 'react'
import TodoHeader from './components/TodoHeader.jsx'
import TodoMain from './components/TodoMain.jsx'
import TodoFooter from './components/TodoFooter.jsx'

export default class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <TodoHeader></TodoHeader>
        <TodoMain></TodoMain>
        <TodoFooter></TodoFooter>
      </section>
    )
  }
}

