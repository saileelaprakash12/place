import React, { Component } from 'react'
import Useraction from './action'
import { connect } from 'react-redux';
 class Slect extends Component {
    constructor(props){
        super(props);
        this.state = {
          name: ''
        }};
        componentDidMount(){
            if (this.props.moments){
             Useraction(this.props.moments);
            }
          }
          handleTextFieldChange(event) {
            let name = event.target.value;
            let text = name // capitalize first letter
              .toLowerCase()
              .split(' ')
              .map(s => s.charAt(0).toUpperCase() + s.substr(1))
              .join(' ');
            
          }
    render() {
        let momentsList = [];
  this.props.data.forEach(({  name }) => momentsList.push({  name }));

  let uniqueSet = [...new Set(momentsList.map(moment => moment.name))];
  let sortedList = uniqueSet.sort()
  .map((name, index) => <option key={index}>{name}</option>);
        return (
            <div>
                <label htmlFor="name">Name</label>
        <input
          required
          className="form-input"
          type="text"
          name="Name"
          placeholder="create or choose"
          value={this.props.name}
          onChange={event => this.handleTextFieldChange(event, 'name')}
          maxLength="20"
          autoComplete="off"
        />
        <select onChange={event => this.handleTextFieldChange(event, 'name')}>
          {sortedList}
        </select>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    data: state.reducer.moments
    
  });
export default connect(mapStateToProps)(Slect)