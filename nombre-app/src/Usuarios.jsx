import React, { useState, useEffect } from 'react'
import api from './Services/api'
import './Usuarios.css'
import './RegistarUsuarios.css'

function Usuarios() {
    const [usuarios, setUsuarios] = useState([])
    const [loading, setLoading] = useState(true)
    // fields for new user registration
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [saving, setSaving] = useState(false)

    useEffect(()=>{
        const obtenerUsuarios = async () => {
            try{
                const response = await api.get('users')
                setUsuarios(response.data)
            } catch (error){
                console.error('Error al obtener los usuarios:', error)
            } finally{
                setLoading(false)
            }
        }
        obtenerUsuarios()
    }, [])
    
    if (loading) {
        return <p>Cargando usuarios...</p>
    }
    
    const handleEditar = (usuario) => {
        console.log('Editar usuario:', usuario)
    }
    
    const handleEliminar = (id) => {
        console.log('Eliminar usuario con ID:', id)
    }

    const handleRegistrar = async (e) => {
        e.preventDefault()
        const nuevo = {
            name: {
                firstname: firstName,
                lastname: lastName
            },
            email,
            phone,
            address: {
                street,
                city
            }
        }
        try {
            setSaving(true)
            const resp = await api.post('users', nuevo)
            setUsuarios((prev) => [...prev, resp.data])
            // reset
            setFirstName('')
            setLastName('')
            setEmail('')
            setPhone('')
            setStreet('')
            setCity('')
        } catch (err) {
            console.error('Error al crear usuario', err)
            alert('No se pudo registrar el usuario')
        } finally {
            setSaving(false)
        }
    }
    
    return (
        <div className="contenedorUsuarios">
            <h1>Registrar Usuario</h1>
            <form className="formUsuario" onSubmit={handleRegistrar}>
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
                <button className="btnRegistrarUsuario" type="submit" disabled={saving}>
                    {saving ? 'Guardando...' : 'Registrar'}
                </button>
            </form>
            <h1>Usuarios</h1>
            <table className="tablaUsuarios">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Teléfono</th>
                        <th>Dirección</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario)=>(
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.name?.firstname}</td>
                            <td>{usuario.name?.lastname}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.phone}</td>
                            <td>{usuario.address?.street}, {usuario.address?.city}</td>
                            <td>
                                <div className="acciones">
                                    <button
                                        className="btnEditar"
                                        onClick={() => handleEditar(usuario)}
                                        title="Editar"
                                    >
                                        Editar
                                    </button>
                                </div>
                            </td>
                            <td>
                                <div className="acciones">
                                    <button
                                        className="btnEliminar"
                                        onClick={() => handleEliminar(usuario.id)}
                                        title="Eliminar"
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Usuarios;