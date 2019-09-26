import React, { Component } from 'react';

/* import components */
import Customer from './Customer.js';
import AddCustomer from './AddCustomer.js'; 

class App extends Component {
  // Default custoemr list in the state
  state = {
       customersList : [
      { id: 1, firstName: 'Khalil', lastName: 'Ahmad', contact: '011321655487', age:15}, 
      { id: 2, firstName: 'Khalil', lastName: 'Ahmad', contact: '011326525487', age:19}, 
      { id: 3, firstName: 'Khalil', lastName: 'Ahmad', contact: '011326553487', age:21}, 
      { id: 5, firstName: 'Khalil', lastName: 'Ahmad', contact: '011326555487', age:98}, 

    ]
 }

 /** Add New Custoemr  */
 addCustomer = (newCustomer) => {
  // Generate a random id for each customer customer. It works only for practice not for reall application. 
  newCustomer.id = Math.random() * 10; 

  /** First way to update the state */
  /*
  let newCus = [...this.state.customersList, newCustomer]; 
  this.setState({
    customersList: newCus,
  });

  */

  /** second way to update the state */
  this.setState(prevState => ({
    customersList: [...prevState.customersList, newCustomer]
  }));
  
 }

 /** Delete a customer  */
 deleteCustomer = (id) => {
  // Filter out to delete 
  const filteredCustomer = this.state.customersList.filter(customer => {
    return customer.id !== id; 
  });  

  // Update the state
  this.setState({
    customersList: filteredCustomer
  });
  
 }  

  render () {
    return (
      <div className="App">
        {/* Header  */}
        <div className="container-fluid bg-dark text-light py-3">
          <div className="container">
            <h1>Customer App</h1>
            <p>Welcome</p>
          </div>
        </div>
        
        <hr/>

        {/* Components */}
        <Customer customers={ this.state.customersList } deleteCustomer={this.deleteCustomer} />
        <AddCustomer addCustomerProps={ this.addCustomer }/>

        {/* Footer*/}
        <div className="container-fluid bg-dark text-light py-3">
          <div className="container">
            <p>It is a sample react app. &copy; khalil</p>
          </div>
        </div>

      </div>

    );
  }
}

export default App;
