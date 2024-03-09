import React, { useState } from "react";


const CreateCars = () => {
    const [model, setModel] = useState("");
    const [numberPlate, setNumberPlate] = useState("");
    const [vin, setVin] = useState("");
    const [yearOfManufacture, setYearOfManufacture] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('',{
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({
                Model: model,
                NumberPlate: numberPlate,
                Vin: vin,
                YearOfManufacture: yearOfManufacture
            })
        });

        if (response.ok) {
            console.log('Car created successfully');
        } else {
            console.error('Error creating car');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
          <label>
            Model:
            <input type="text" value={model} onChange={e => setModel(e.target.value)} />
          </label>
          <label>
            Number Plate:
            <input type="text" value={numberPlate} onChange={e => setNumberPlate(e.target.value)} />
          </label>
          <label>
            VIN:
            <input type="text" value={vin} onChange={e => setVin(e.target.value)} />
          </label>
          <label>
            Year of Manufacture:
            <input type="number" value={yearOfManufacture} onChange={e => setYearOfManufacture(e.target.value)} />
          </label>
          <input type="submit" value="Submit" />
        </form>
    );   
};
export default CreateCars;