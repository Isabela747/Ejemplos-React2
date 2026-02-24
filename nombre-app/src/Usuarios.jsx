import React, { useState, useEffect } from 'react'
import api from './Services/api'
import './Usuarios.css'

function Usuarios() {
    const [usuarios, setUsuarios] = useState([])
    const [loading, setLoading] = useState(true)

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
    
    return (
        <div className="contenedorUsuarios">
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