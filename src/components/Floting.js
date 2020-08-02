import React, { Component } from 'react'
import './Createcontact.css'

export default class componentName extends Component {
    render() {
        return (
            
            <div className="get-in-contact">
                <h5 className="text-primary title">Create new contact</h5>
                <div className="container">
                    <form>
                    <div className="contact-form row">
                        <div className="form-field col-lg-6">
                            <input type="text" id="firstname" className="input-text"/>
                            <label for="name" className="label">FirstName</label>
                        </div>
                        <div className="form-field col-lg-6">
                            <input type="text" id="lastname" className="input-text"/>
                            <label for="name" className="label">LastName</label>
                        </div>
                        <div className="form-field col-lg-12">
                            <input type="text" id="contact" className="input-text"/>
                            <label for="name" className="label">Contact</label>
                        </div>
                        <div className="form-field col-lg-6">
                        <input type="text" id="company" className="input-text"/>
                        <label for="name" className="label">Company</label>
                        </div>
                        <div className="form-field col-lg-6">
                            <input type="text" id="designation" className="input-text"/>
                            <label for="name" className="label">Designation</label>
                        </div>
                        <div className="form-field col-lg-12">
                            <input type="text" id="Email" className="input-text fa fa-envelope" />
                            <label for="name" className="label">Email</label>
                        </div>
                        
                        <div className="form-field col-lg-12">
                            <input type="number" id="Phone" className="input-text"/>
                            <label for="name" className="label">Phone</label>
                        </div>
                        <div className="form-field col-lg-6">
                            <span className="text-primary addmore">+Add More Details</span>   
                        </div>
                        <div className="form-field col-lg-6">
                            <input className="submit-btn btn-primary mb-6" type="submit" value="save"/>
                            <input className="submit-btn btn-secondary mb-6" type="cancle" value="cancle"/>
                        </div>
                       
                    </div>
                    </form>
                </div>
                
            </div>
        )
    }
}
