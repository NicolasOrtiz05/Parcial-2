import { useState } from "react";

export const TablaEstudiante = ({ eliminar, listaEstudiantes, extrae }) => {

    const [filtro, setFiltro] = useState("");

    const filtrado = (event) => {
        setFiltro(event.target.value);
    };

    const estudiantesFiltrados = listaEstudiantes.filter((estudiante) =>
        estudiante.facultad.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <>
            <label htmlFor="filtro">Filtro por facultad: </label>
            <select class="form-select" aria-label="Default select example" onChange={filtrado}>
                <option value="" selected>Seleccione Facultad</option>
                <option value="ingenieria">Ingeniería</option>
                <option value="medicina">Medicina</option>
                <option value="comunicacion">Comunicación</option>
                <option value="educacion">Eduación</option>
                <option value="derecho">Derecho</option>
            </select>

            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Id Estudiante</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Semestre</th>
                            <th scope="col">Facultad</th>
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
                                    <td>{estudiante.facultad}</td>
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
