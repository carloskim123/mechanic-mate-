import React, { useEffect, useState} from "react";

const ViewCustomers = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const fetchCustomers = async () => {
            const response = await fetch('');
            const data = await response.json();
            setCustomers(data);
        };

        fetchCustomers();
    }, []);

    return (
        <div>
          {customers.map((customer, index) => (
            <div key={index}>
              <p>{customer.FirstName} {customer.LastName}</p>
              <p>{customer.EmailAddress}</p>
              <p>{customer.PhoneNumber}</p>
            </div>
          ))}
        </div>
      ); 
};

export default ViewCustomers;