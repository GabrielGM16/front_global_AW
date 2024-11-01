import React, { useEffect, useState } from 'react';
import '../styles/PETStyles.css';

const PETReport = () => {
    const [reportData, setReportData] = useState([]);

    // Función para obtener los datos de la API o base de datos
    const fetchReportData = async () => {
        try {
            // Simulación de una llamada a la API para obtener los datos (reemplaza con tu endpoint real)
            const response = await fetch('/api/pet-report'); // URL de la API
            if (response.ok) {
                const data = await response.json();
                setReportData(data);
            } else {
                console.error('Error al obtener los datos del reporte');
            }
        } catch (error) {
            console.error('Error en la solicitud de datos:', error);
        }
    };

    useEffect(() => {
        fetchReportData(); // Llamada a la función para obtener los datos cuando se carga el componente
    }, []);

    return (
        <div className="pet-report">
            <h2>Reporte de Captura de PET</h2>
            <table>
                <thead>
                    <tr>
                        <th>Semana</th>
                        <th>Peso (kg)</th>
                        <th>Precio (USD)</th>
                        <th>Precio (MXN)</th>
                    </tr>
                </thead>
                <tbody>
                    {reportData.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.week}</td>
                            <td>{entry.weight}</td>
                            <td>{entry.priceUSD}</td>
                            <td>{entry.priceMXN}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PETReport;
