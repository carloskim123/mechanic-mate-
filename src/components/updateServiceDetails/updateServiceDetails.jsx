import React, { useState, useEffect } from 'react';

const UpdateServiceDetails = ({ serviceDetail }) => {
    const [serviceNotes, setServiceNotes] = useState('');
    const [servicePartId, setServicePartId] = useState('');
    const [serviceCost, setServiceCost] = useState('');

    useEffect(() => {
        if (serviceDetail) {
            setServiceNotes(serviceDetail.ServiceNotes);
            setServicePartId(serviceDetail.ServicePartId);
            setServiceCost(serviceDetail.ServiceCost);
        }
    }, [serviceDetail]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch(`http:///${servicePartId}`, {
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