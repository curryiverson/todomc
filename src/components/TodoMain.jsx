import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

export default class TodoMain extends Component {
  static propTypes = {
    list: PropTypes.array,
  }
  changeDone = async (id,done) => {
    const res = await axios.patch('http://localhost:8080/data/' + id, {
      done: !done
    })
    if (res.status == 200) {
      this.props.getTodoList()
    }
  }
  delete = async (id) => {
    const res = await axios.delete('http://localhost:8080/data/' + id)
    console.log('删除', res)
    if (res.status == 200) {
      this.props.getTodoList()
    }
  }
  render() {
    const { list } = this.props
    console.log(list)
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {list.map((item) => (
            <li className={item.done ? "completed" : ''} key={item.id}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={item.done}
                  onChange={()=>this.changeDone(item.id,item.done)}
                />
                <label>{item.name}</label>
                <button
                  className="destroy"
                  onClick={() => this.delete(item.id)}
                ></button>
              </div>
              <input className="edit" />
            </li>
          ))}
        </ul>
      </section>
    )
  }
}
