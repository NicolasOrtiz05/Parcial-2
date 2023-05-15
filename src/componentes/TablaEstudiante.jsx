import { useState } from "react";

export const TablaEstudiante = ({ eliminar, listaEstudiantes, extrae }) => {

    const [filtroFacultad, setFiltroFacultad] = useState(""); // Cambio en el nombre del estado

    const filtrado = (event) => {
        setFiltroFacultad(event.target.value);
    };

    const estudiantesFiltrados = listaEstudiantes.filter((estudiante) =>
        estudiante &&
        estudiante.facultad.toLowerCase().includes(filtroFacultad.toLowerCase())
    );

    return (
        <>
            <br />
            <label htmlFor="filtro">Filtro por facultad: </label>
            <select class="form-select" aria-label="Default select example" onChange={filtrado}>
                <option value="" selected>Seleccione Facultad</option>
                <option value="Ingenieria">Ingeniería</option>
                <option value="Medicina">Medicina</option>
                <option value="Comunicacion">Comunicación</option>
                <option value="Educacion">Eduación</option>
                <option value="Derecho">Derecho</option>
            </select>

            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Id Estudiante</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Semestre</th>
                            <th scope="col">Facultad</th>
                            <th scope="col">Programa</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            estudiantesFiltrados.map((estudiante, index) => (
                                <tr key={estudiante.id}>
                                    <td>{estudiante.id}</td>
                                    <td>{estudiante.nombre}</td>
                                    <td>{estudiante.semestre}</td>
                                    <td>{estudiante.facultad}</td>
                                    <td>{estudiante.programa}</td>
                                    <td>
                                        <button type="button" className="btn btn-secondary" onClick={() => extrae(index)}>Editar</button>
                                        <button type="button" className="btn btn-dark" onClick={() => eliminar(estudiante.id, index)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}
