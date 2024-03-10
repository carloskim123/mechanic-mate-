import React, { useState } from 'react';

const UpdateServiceDetails = ({ serviceDetail }) => {
    const [serviceNotes] = useState(serviceDetail.ServiceNotes);
    const [servicePartId] = useState(serviceDetail.ServicePartId);
    const [serviceCost] = useState(serviceDetail.ServiceCost);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`http://your-api-url.com/update-service-details/${servicePartId}`, {
      method: 'PUT',
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
      console.log('Service details updated successfully');
    } else {
      console.error('Error updating service details');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields here */}
      <input type="submit" value="Update" />
    </form>
  );
};

export default UpdateServiceDetails;