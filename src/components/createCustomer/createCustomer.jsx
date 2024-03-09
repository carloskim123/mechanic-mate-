import React, { useState } from "react";

const CreateCustomer = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");


    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                FirstName: firstName,
                LastName: lastName,
                EamilAddress: emailAddress,
                PhoneNumber: phoneNumber,
            })
        });
        
        if (response.ok) {
            console.log('Customer created Successfully')
        } else {
            console.log('Erroe creating customer');
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
          </label>
          <label>
            Last Name:
            <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
          </label>
          <label>
            Email Address:
            <input type="email" value={emailAddress} onChange={e => setEmailAddress(e.target.value)} />
          </label>
          <label>
            Phone Number:
            <input type="tel" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
          </label>
          <input type="submit" value="Submit" />
        </form>

    );
};

export default CreateCustomer;