


function Usuarios(){
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const obtenerUsuarios = async () => {
            try{
                const response = await api.get("users");
                setUsuarios(response.data);
            } catch (error){
                console.error('Error al obtener los usuarios:', error);
            } finally{
                setLoading(false);
            }
        };
        obtenerUsuarios();
    }, [])
    
    if (loading) {
        return <p>Cargando usuarios...</p>
    }
    
    const handleEditar = (usuario) => {
        console.log('Editar usuario:', usuario);
    }
    
    const handleEliminar = (id) => {
        console.log('Eliminar usuario con ID:', id);
    }
    
    return (
        <div>
            <h1>Gestión de Usuarios</h1>
            <table>
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
                            <td>{usuario.name.firstname}</td>
                            <td>{usuario.name.lastname}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.phone}</td>
                            <td>{usuario.address.street}, {usuario.address.city}</td>
                            <td>
                                <button 
                                    onClick={() => handleEditar(usuario)}
                                    title="Editar"
                                >
                                    <img src={editarIcon} alt="Editar" style={{width: '20px', height: '20px'}} />
                                </button>
                            </td>
                            <td>
                                <button 
                                    onClick={() => handleEliminar(usuario.id)}
                                    title="Eliminar"
                                >
                                    <img src={eliminarIcon} alt="Eliminar" style={{width: '20px', height: '20px'}} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
  