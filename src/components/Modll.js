import React from 'react'
import {Modal,Row,col,Button} from 'react-bootstrap';
import Snackbar from '@material-ui/core';
import IconButton from '@material-ui/core';
import BootstrapTable from 'react-bootstrap-table-next';
 


 class Modll extends React. Component {
     constructor(){
         super();
         this.state={
            'post':[],
             snackbaropen:false,
             snackbarmsg:"",
          }
     }
      snackbarClose=(event)=>{
        this.setState({
            snackbaropen:false,
          })
     }
    
     async componentDidMount(){
         debugger;
        const url = "places/" 
        const response = await fetch(url)
        const data = await response.json()
        this.setState({
          
            'post':data.places
        })
        }
    render() {
      debugger;
      if(!this.state.post.length){
        return <div>didnt to get anyplace</div>
      }
      const postJSX=
      
        this.state.post.map((item,i)=>{
      return <ul key ={i}>
  <ol ><h6 >Name:</h6>{item.name}</ol>
  <ol><h6 >Description:</h6>{item.official_description}</ol>
  <ol><h6>location:</h6>{item.location}</ol>
  <ol><h6>pincode:</h6>{item.pincode}</ol>
      </ul>
        }) 
      
 return (
            <div>
               <Modal
               
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         About Place
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <ul>
        <ol ><h6 >Name:</h6>{this.props.data.name}</ol>
        <ol><h6 >Description:</h6>{this.props.data.description}</ol>
        <ol><h6>location:</h6>{this.props.data.location}</ol>
        <ol><h6>pincode:</h6>{this.props.data.pincode}</ol>
      </ul>
          
      </Modal.Body>
      <Modal.Footer>
        <Button variant="info" onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
   
            </div>
        )
    }
}
export default Modll
