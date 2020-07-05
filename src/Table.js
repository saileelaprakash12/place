import React,{useState,useEffect} from 'react'
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {Modal,Button} from 'react-bootstrap';

function Table() {
    
    const [place,setPlace]=useState([]);
    const [modalinfo,setModalinfo]=useState([]);
    const[showmodal,setShowmodal]=useState(false);
    const[show,setShow]=useState(false);

    const handleclose=()=> setShow(false)
    const handleShow=()=> setShow(true)
    const getPlaceData=async()=>{
        debugger
        try{
            const response= await axios.get('places/')
              const data= await response.data
              setPlace(data.places)
                
        }
        catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        debugger;
        getPlaceData()
    },[])
    const columns=[
        {dataField:'id',text:"ID"},
        {dataField:'name',text:"Name"},
        {dataField:'location',text:"Location"},
        {dataField:'pincode',text:"Pincode"},
        {dataField:'latitude',text:"Latitude"}
]

const rowEvents={
   
    onClick:(e,row)=>{
     console.log(row)
     setModalinfo(row) 
     toggleTrueFalse()
 }
 
 }
 
    const toggleTrueFalse=()=>{
        setShowmodal(handleShow)
    }
    const ModalContent=()=>{
        return(
        <Modal show={show} onHide={handleclose}>
            <Modal.Header closeButton>
    <Modal.Title >{modalinfo.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <h4>About place</h4>
            <ul>
        <ol ><h6 >Name:</h6>{modalinfo.name}</ol>
        <ol><h6 >Description:</h6>{modalinfo.official_description}</ol>
        <ol><h6>location:</h6>{modalinfo.location}</ol>
        <ol><h6>pincode:</h6>{modalinfo.pincode}</ol>
            </ul>
            </Modal.Body>
            <Modal.Footer>
        <Button variant="secondary" onClick={handleclose}>close</Button>
            </Modal.Footer>
        </Modal>
        )}
    return (
        <div>
          <BootstrapTable
          keyField="id"
          data={place}
          columns={columns}
          pagination={paginationFactory()}
         rowEvents={rowEvents}
        
          /> 

         {show ? <ModalContent/>:null}  
        </div>
    )
}

export default Table
