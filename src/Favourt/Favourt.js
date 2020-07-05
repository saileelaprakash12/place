import React    from "react";
import template from "./Favourt.jsx";
import store from '../store'
import {connect} from 'react-redux'

class Favourt extends React.Component {
  constructor(){
    super();
    this.state={
      data:[]
    }
  }
  fnPlace(e){
    debugger;
   
    e.preventDefault();
    let n=this.refs.name.value;
    store.dispatch({
      type:'NAME',
      payload:n
    })
    if(!this.state.data.includes(n)){
      
      this.setState({
        'data':[...this.state.data,n]
      })
    }else{
      alert("already exist")
    }
    
  }
  cancelCourse(){
  document.getElementById('name').value="" 
  }
  render() {
    
    return template.call(this);
  }
}
const mapStateToProps=(state)=>{
return{
  n:state.reducer.name
}
}
export default connect(mapStateToProps)(Favourt);
