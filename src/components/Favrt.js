import React, { Component } from 'react'
import List from '../components/List';
import Addorm from '../components/Addorm'
export default class Favrt extends Component {
    constructor(){
        super();
        this.state={
            todos:[
                {id:1 ,content:"wonderla"},
                {id:2,content:"tirumala"}
            ]
        }
    }
    deleteList=(id)=>{
        debugger;
    const todos = this.state.todos.filter(items=>{
        return items.id!==id
    })
    this.setState({
        todos
    })
    }
    addToDo=(item)=>{
        item.id=Math.random();
        let todos=[...this.state.todos,item]
        this.setState({
            todos
        })
    }
    render() {
        return (
            <div className="list-favrt container ">
              <h3 className="center blue-text">Add Your Favourite place </h3>  
              <List todos={this.state.todos} deleteList={this.deleteList}/>
            <Addorm addToDo={this.addToDo}/>
            </div>
        )
    }
}
