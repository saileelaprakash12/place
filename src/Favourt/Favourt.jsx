import "./Favourt.css";
import React from "react";

function template() {
  return (
    <div className="favourt">
      <h4>Favourt Place</h4>
      <p>
        <input ref="name" id="name"/>
        <input type="button" value="place" onClick={this.fnPlace.bind(this)}/>
  
                
      </p>
  <h6> {this.props.n} </h6>
  
      <ol>
        {
          this.state.data.map((v,i)=>{
          return <li  key={i}>{v}</li>
          })
        }
        
       
      </ol>
    </div>
  );
};

export default template;
