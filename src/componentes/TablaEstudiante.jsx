import { useState } from "react";

export const TablaEstudiante = ({ eliminar, listaEstudiantes, extrae }) => {

    const [filtro, setFiltro] = useState("");

    const filtrado = (event) => {
        setFiltro(event.target.value);
    };

    const estudiantesFiltrados = listaEstudiantes.filter((estudiante) =>
        estudiante.nombre.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <>
            <nav className="d-inline-flex p-2 bd-highlight" >
                <span className="filtro-label">Filtro por Nombre:</span>
                <form className="form-inline">
                    <input
                        className="form-control mr-sm-2 filtro-input"
                        type="search"
                        placeholder="Buscar"
                        aria-label="Buscar"
                        onChange={filtrado}
                    />
                </form>
            </nav>


            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Id Estudiante</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Semestre</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            estudiantesFiltrados.map((estudiante, index) => (
                                <tr key={index}>
                                    <td>{estudiante.id}</td>
                                    <td>{estudiante.nombre}</td>
                                    <td>{estudiante.semestre}</td>
                                    <td>
                                        <button type="button" className="btn btn-secondary" onClick={() => extrae(index)}>Editar</button>
                                        <button type="button" className="btn btn-dark" onClick={() => eliminar(index)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}
