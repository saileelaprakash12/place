import React, { Component } from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
//import {Button,ButtonToolbar} from 'react-bootstrap';
import Modll from '../components/Modll'


class Tbbl extends Component {
    constructor(props){
        super(props);
        this.state={
            'post':[],
            result:{},
            selectedData: {},
            addModalShow:false}
        
    }
     addModalClose=()=>{
      this.setState({
        addModalShow:false
      })
    }
   async componentDidMount(){
        const url = "places/" 
        const response = await fetch(url)
        const data = await response.json()
        this.setState({
          'post':data.places
            })
            console.log(this.state.post)
    }
    view(official_description,name,location,pincode){
        debugger;
       this.setState({
         addModalShow:true,
         selectedData: {
           description: official_description,
           name,
           location,
           pincode
         }
       })
      console.log(official_description,name,location,pincode)
      
      
    }
     
    render() {
     
              return (
            <div>
              <ReactTable
               columns={[
                {
                  Header: "ID",
                  accessor: "id",
                  width:100,
                  maxWidth:100,
                  minWidth:100
                  
                },
                {
                  Header: "Name",
                  accessor: "name",
                 
                  
                },
                {
                  Header: "location",
                  accessor: "location",
                  filterable:false,
                  sortable:false
                },
                {
                  Header: "pincode",
                  accessor: "pincode",
                  filterable:false,
                  sortable:false
                  },
                  {
                    filterable: false,
                    sortable:false,
                    Header: 'Click here',
                   Cell: (props)=>{
                        return (
                            <button className="btn btn-info" onClick={
                                ()=>{
                                this.view(props.original.official_description,props.original.name,
                                  props.original.location,props.original.pincode
                                  )
                                  
                                }
                            }>View</button>
                        )
                    },
                    width:100,
                  maxWidth:100,
                  minWidth:100
                }
            ]}
            data={this.state.post}
            filterable
            defaultPageSize={10}
            noDataText={"please wait..."}
            
              >
                
              </ReactTable>
                <Modll
                data={this.state.selectedData}
                show={this.state.addModalShow}
                onHide={this.addModalClose}
               
                />
            </div>
        )
    }
}
export default  Tbbl