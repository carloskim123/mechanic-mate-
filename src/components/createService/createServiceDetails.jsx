import React, { useState } from "react";

const CreateServiceDetails = () => {
  const [serviceNotes, setServiceNotes] = useState("");
  const [servicePartId, setServicePartId] = useState("");
  const [serviceCost, setServiceCost] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ServiceNotes: serviceNotes,
        ServicePartId: servicePartId,
        ServiceCost: serviceCost
      })
    });

    if (response.ok) {
      console.log('Service details created successfully');
    } else {
      console.error('Error creating service details');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Service Notes:
        <input type="text" value={serviceNotes} onChange={e => setServiceNotes(e.target.value)} />
      </label>
      <label>
        Service Part ID:
        <input type="text" value={servicePartId} onChange={e => setServicePartId(e.target.value)} />
      </label>
      <label>
        Service Cost:
        <input type="number" step="0.01" value={serviceCost} onChange={e => setServiceCost(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default CreateServiceDetails;