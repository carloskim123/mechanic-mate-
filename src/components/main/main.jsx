import React, { useState } from "react";

const Main = () => {
    const [customerName, setCustomerName] = useState("");
    const [serviceDetails, setServiceDetails] = useState("");
    const [carRegistration, setCarRegistration] = useState("");
    const [carType, setCarType] = useState("");
    const [totalCost, setTotalCost] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setIsError(false);

        // Perform validation to ensure all fields are filled in
        if (!customerName || !serviceDetails || !carRegistration || !carType || totalCost === 0) {
            setIsError(true);
            setIsLoading(false);
            return;
        }

        //  invoice logic 
        const invoice = {
            customerName,
            serviceDetails,
            carRegistration,
            carType,
            totalCost
        };

        try {
            // Perform any necessary calculations or API calls to generate the invoice
            // Simulate API call delay
            await new Promise((resolve) => setTimeout(resolve, 2000));

            console.log("Generated invoice:", invoice);
            // Add additional actions here, such as displaying success message or redirecting to invoice page
        } catch (error) {
            console.error("Error generating invoice:", error);
            // Add error handling logic here, such as displaying error message
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="main-container">
            <div className="main-title">
                <h3> DASHBOARD</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="customerName">Customer Name:</label>
                <input
                    type="text"
                    id="customerName"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                />

                {/* Add validation error message */}
                {isError && <p>Please fill in all fields.</p>}

                <label htmlFor="serviceDetails">Service Details:</label>
                <textarea
                    id="serviceDetails"
                    value={serviceDetails}
                    onChange={(e) => setServiceDetails(e.target.value)}
                ></textarea>

                <label htmlFor="carRegistration">Car Registration:</label>
                <input
                    type="text"
                    id="carRegistration"
                    value={carRegistration}
                    onChange={(e) => setCarRegistration(e.target.value)}
                />

                <label htmlFor="carType">Car Type:</label>
                <input
                    type="text"
                    id="carType"
                    value={carType}
                    onChange={(e) => setCarType(e.target.value)}
                />

                <label htmlFor="totalCost">Total Cost:</label>
                <input
                    type="number"
                    id="totalCost"
                    value={totalCost}
                    onChange={(e) => setTotalCost(e.target.value)}
                />

                {/* Add loading indicator */}
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <button type="submit">Generate Invoice</button>
                )}
            </form>
        </main>
    );
};

export default Main;

 