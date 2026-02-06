function Expresiones(){
    const nombre = 'Margaret';
    const apellidos = 'Rojas de Leon';
    return (
        <div>
            <h2>Expresiones</h2>
            <h3>Tu nombre es: {nombre} y tus apellidos son: {apellidos}</h3>
            <Lista />
        </div>
    )
}

function Lista(){
    const users = [
        {id: 1, name: 'Eutiquio', role: 'Web Developer'}, 
        {id: 2, name: 'Gadiel', role: 'Web Designer'},
        {id: 3, name: 'Mario', role: 'Team Leader'},
    ]
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Nombre |</th>
                        <th>Role</th>
                    </tr>
                    {
                        users.map(function(user, index){
                            return (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.role}</td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
        </div>
    )
}

export default Expresiones