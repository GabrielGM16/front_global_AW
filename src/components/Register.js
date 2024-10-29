import React, { useState } from 'react';
import '../styles/Register.css';

function Register({ onRegister }) {
  const [username, setUsername] = useState(''); // Estado para username
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validaciones de los campos
    if (!username || !email || !password || !confirmPassword) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    try {
      // Llamada a la API de registro
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }), // Incluye username
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token); // Almacenar token
        onRegister(data.user); // Actualiza el estado de autenticación en App
      } else {
        const errorData = await response.json();
        setError(errorData.message); // Muestra mensaje de error
      }
    } catch (err) {
      setError('Ocurrió un error, por favor intenta de nuevo.');
    }
  };

  return (
    <div className="register-container">
      <h2>Registro</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Nombre de usuario"
          required
          className="register-input"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="register-input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          required
          className="register-input"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirmar Contraseña"
          required
          className="register-input"
        />
        <button type="submit" className="register-button">Registrar</button>
      </form>
    </div>
  );
}

export default Register;
