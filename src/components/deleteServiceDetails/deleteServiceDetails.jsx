import React from 'react';

const DeleteServiceDetails = ({ servicePartId }) => {
  const handleDelete = async () => {
    const response = await fetch(`/${servicePartId}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      console.log('Service details deleted successfully');
    } else {
      console.error('Error deleting service details');
    }
  };

  return (
    <button onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteServiceDetails;