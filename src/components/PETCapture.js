import React, { useState } from 'react';
import '../styles/PETStyles.css';

const PETCapture = () => {
    const [weight, setWeight] = useState('');
    const [date, setDate] = useState('');
    const [priceUSD, setPriceUSD] = useState('');
    const [priceMXN, setPriceMXN] = useState('');

    const conversionRate = 18; // Tasa de cambio de USD a MXN, ajusta según sea necesario
    const ratePerKgUSD = 0.5; // Precio por kg en dólares, ajusta según sea necesario

    const calculatePrices = (weight) => {
        const priceInUSD = weight * ratePerKgUSD;
        const priceInMXN = priceInUSD * conversionRate;
        setPriceUSD(priceInUSD.toFixed(2));
        setPriceMXN(priceInMXN.toFixed(2));
    };

    const handleWeightChange = (event) => {
        const newWeight = event.target.value;
        setWeight(newWeight);
        calculatePrices(newWeight);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Fecha: ${date}, Peso: ${weight}, Precio en USD: ${priceUSD}, Precio en MXN: ${priceMXN}`);
        // Aquí puedes enviar los datos a la base de datos o API
    };

    return (
        <div className="pet-capture">
            <h2>Captura Semanal de PET</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Fecha de Captura:
                    <input type="date" value={date} onChange={handleDateChange} required />
                </label>
                <label>
                    Peso del PET (kg):
                    <input type="number" value={weight} onChange={handleWeightChange} required />
                </label>
                <label>
                    Precio Calculado (USD):
                    <input type="text" value={priceUSD} readOnly />
                </label>
                <label>
                    Precio Calculado (MXN):
                    <input type="text" value={priceMXN} readOnly />
                </label>
                <button type="submit">Registrar Captura</button>
            </form>
        </div>
    );
};

export default PETCapture;
