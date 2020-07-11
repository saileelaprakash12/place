import React, { Component } from 'react'

 class Addorm extends Component {
     constructor(){
         super();
         this.state={
             content:""
         }
     }
     handleChange=(e)=>{
        this.setState({
            content :e.target.value
        })
     }
     handleSubmit=(e)=>{
        e.preventDefault()
        this.props.addToDo(this.state);
        this.setState({
            content:""
        })
     }
    render() {
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
        <label> Favourite place </label>
        <input type="text" onChange={this.handleChange} value={this.state.content}></input>
                </form> 
            </div>
        )
    }
}
export default  Addorm