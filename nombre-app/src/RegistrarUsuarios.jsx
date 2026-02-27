import React, { useState } from 'react';
import api from './Services/api';
import './RegistarUsuarios.css';

function RegistrarUsuarios({ onRegister }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [saving, setSaving] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nuevoUsuario = {
            name: {
                firstname: firstName,
                lastname: lastName,
            },
            email,
            phone,
            address: {
                street,
                city,
            },
        };

        try {
            setSaving(true);
            const resp = await api.post('/users', nuevoUsuario);
            console.log('Usuario registrado:', resp.data);
            alert('¡Usuario registrado exitosamente!');
         
            if (onRegister) {
                onRegister(resp.data);
            }
            
            setFirstName('');
            setLastName('');
            setEmail('');
            setPhone('');
            setStreet('');
            setCity('');
        } catch (error) {
            console.error('Error al registrar el usuario:', error);
            alert('No se pudo registrar el usuario.');
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="contenedorUsuarios">
            <h2>Registrar Usuario</h2>

            
            <form className="formUsuario" onSubmit={handleSubmit}>
                <input
                    className="inputUsuario"
                    type="text"
                    placeholder="Nombre"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                <input
                    className="inputUsuario"
                    type="text"
                    placeholder="Apellido"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                <input
                    className="inputUsuario"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    className="inputUsuario"
                    type="tel"
                    placeholder="Teléfono"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input
                    className="inputUsuario"
                    type="text"
                    placeholder="Calle"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                />
                <input
                    className="inputUsuario"
                    type="text"
                    placeholder="Ciudad"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button
                    className="btnRegistrarUsuario"
                    type="submit"
                    disabled={saving}
                >
                    {saving ? 'Guardando...' : 'Registrar'}
                </button>
            </form>
        </div>
    );
}

export default RegistrarUsuarios;
