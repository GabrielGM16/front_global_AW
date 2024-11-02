import React, { useEffect, useState } from 'react';
import '../styles/PETStyles.css';

const PETReport = () => {
    const [reportData, setReportData] = useState([]);
    const [error, setError] = useState(''); // Estado para manejar errores

    // Función para obtener los datos de la API o base de datos
    const fetchReportData = async () => {
        try {
            // Llamada a la API para obtener los datos del reporte de captura de PET
            const response = await fetch('http://localhost:5000/api/pet/pet-report');
            if (response.ok) {
                const data = await response.json();
                setReportData(data);
                setError(''); // Limpia cualquier error previo
            } else {
                throw new Error(`Error al obtener los datos del reporte: ${response.statusText}`);
            }
        } catch (error) {
            setError('Error en la conexión con el servidor');
            console.error('Error en la solicitud de datos:', error);
        }
    };

    useEffect(() => {
        fetchReportData(); // Llamada a la función para obtener los datos cuando se carga el componente
    }, []);

    return (
        <div className="pet-report">
            <h2>Reporte de Captura de PET</h2>
            {error ? (
                <p>{error}</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Fecha de Captura</th>
                            <th>Peso (kg)</th>
                            <th>Precio (USD)</th>
                            <th>Precio (MXN)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reportData.map((entry, index) => (
                            <tr key={index}>
                                <td>{new Date(entry.capture_date).toLocaleDateString()}</td>
                                <td>{entry.weight_kg}</td>
                                <td>{entry.price_usd}</td>
                                <td>{entry.price_mxn}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default PETReport;
