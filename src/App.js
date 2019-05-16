import React, { Component } from 'react'
import styled from 'styled-components'
import './App.css'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'

const Wrapper = styled.div``

const Title = styled.div`
  font-size: 30px;
  box-shadow: 0px 5px 10px -3px rgba(0,0,0,0.5);
  padding: 10px;
`

class App extends Component {
  constructor(props){
    super(props);

    this.state = { todos: [] } 
  }

  render(){
    const onClickAddButton = ( text ) => {
      const todos = this.state.todos
      const id = todos.length
      const completed = false

      todos.push({ id, text, completed })

      this.setState({ todos })
    }

    const onClickCheckButton = ( id ) => {
      const todos = this.state.todos  
      const completed = todos[id].completed
      todos[id] = Object.assign(todos[id], {completed: !completed})
      
      this.setState({ todos })
    }
    console.log(this.state)

    return (
      <Wrapper className="App">
        <Title>yotaiyo`s To-Do App</Title>
        <TodoInput 
          onClick={onClickAddButton}
        />
        <TodoList todos={this.state.todos} onClick={onClickCheckButton} />
      </Wrapper>
    )
  }
}

export default App