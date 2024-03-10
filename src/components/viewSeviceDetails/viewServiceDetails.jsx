import React, { useState, useEffect } from 'react';

const ViewServiceDetails = () => {
  const [serviceDetails, setServiceDetails] = useState([]);

  useEffect(() => {
    fetchServiceDetails();
  }, []);

  const fetchServiceDetails = async () => {
    const response = await fetch('');
    const data = await response.json();
    setServiceDetails(data);
  };

  return (
    <div>
      {serviceDetails.map((detail) => (
        <div key={detail.ServicePartId}>
          {/* Display service details here */}
        </div>
      ))}
    </div>
  );
};

export default ViewServiceDetails;