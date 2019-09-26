import React from 'react'; 
/*

in Stateless component 
1. we dont declare class instead we declare function 
2. Component doesn't have render() function
3. Component doesn't have state 
4. Component receive data as arugment not as props

*/
const Componentjs  = (props) => {
    // Recieved props 
    const { customers } = props;
    const { deleteCustomer } = props; 

    // map props in the a list.
    const customersList = customers.map(customer => {
        /* Dispaly only if the customer age is greather than 20 */
        return customer.age > 20 ? (
            <div className="col-sm-12 col-md-6 col-lg-4" key={ customer.id }>
                <ul className="list-group m-2">
                    <li className="list-group-item active">
                        { customer.firstName + ' ' +  customer.lastName}
                    </li>
                    <li className="list-group-item">First Name : { customer.firstName }</li>
                    <li className="list-group-item">Last Name : { customer.lastName }</li>
                    <li className="list-group-item">Contact : { customer.contact }</li>
                    <li className="list-group-item">Age : { customer.age }</li>
                    <li className="list-group-item">
                        <button className="btn btn-danger btn-sm" onClick={()=>{deleteCustomer(customer.id)}}>Delete</button>
                    </li>
                </ul>
            </div>
        ) : (null)
    }); 


    return (
        <div className="container-fluid bg-white py-2">
            <div className="container">
                <div className="text-left">
                    <h3> Customers List</h3>
                    <hr className="bg-info"/>
                </div>
                <div className="row" >
                    { customersList }
                </div>
            </div>
        </div>
    ); 
}

export default Componentjs; 