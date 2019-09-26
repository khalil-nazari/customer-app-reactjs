import React, { Component } from 'react';

class AddCustomer extends Component {
    state = {
        firstName: '', 
        lastName: '', 
        contact: '', 
        age: '',    

    }

    // Handle change in the form fields. Udpate state
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }


    // Handle Form submition. Pass the state/data to App.js
    handleSubmit = (e) => {
        e.preventDefault();
        e.target.value='';

        /* IMPORTANT NOTE!
            we call the prop as a function because in the App.js it is a funciton. 
            we don't assign the value to it we call it.
         */
        this.props.addCustomerProps(this.state);
    }

    render() {
        return (
        	// Add new customer form
            <div className="container-fluid bg-light py-4">
                <div className="container align-text-center">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 lg-8">
                            <h3 className="mt-3 mb-2">Add New Customer</h3>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="firstName" onChange={this.handleChange} placeholder="First Name"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="lastName" onChange={this.handleChange} placeholder="Last Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="contact" onChange={this.handleChange} placeholder="Contact"  />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="age" onChange={this.handleChange} placeholder="Age" />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
           
        )
    }
}

export default AddCustomer; 