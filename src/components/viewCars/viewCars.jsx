import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ViewCars = () => {
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCars = async () => {
            const response = await fetch('');
            const data = await response.json();
            setCars(data);
        };

        fetchCars();
    }, []);  
    

        const handleCarClick = (car) => {
            // Navigate to the service page for the clicked car
            navigate(`/service-car/${car.Vin}`);
        };

    return (
        <div>
            {cars.map((car, index) => (
                <div key={index} onClick={() => handleCarClick(car)}>
                    <p>{car.Model} - {car.NumberPlate}</p>
                    <p>VIN: {car.Vin}</p>
                    <p>Year of Manufacture: {car.YearOfManufacture}</p>
                </div>
            ))}
        </div>
    );
};


export default ViewCars;


  