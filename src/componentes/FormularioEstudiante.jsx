import { useEffect, useState } from "react"

export const FormularioEstudiante = ({ agregar, datos, editar, estudiantes }) => {
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [semestre, setSemestre] = useState("");
    const [facultad, setFacultad] = useState("");
    const [boton, setBoton] = useState("Registrar");

    const botonMostrar = (index) => {
        if (index == 0) {

            setBoton("Actualizar")
        } else {
            setBoton("Registrar")
        }
    };

    const desabiliBoton = (index) => {
        const ide = document.getElementById('id');
        if (index == 0) {
            ide.disabled = true;
        } else {
            ide.disabled = false;
        }
    };

    useEffect(() => {
        if (datos) {
            setId(datos.id);
            desabiliBoton(0)
            setNombre(datos.nombre);
            setSemestre(datos.semestre);
            setFacultad(datos.facultad);
            botonMostrar(0);

        }
    }, [datos]);

    const limpiar = () => {
        setId("");
        setNombre("");
        setSemestre("");
        setFacultad("");
    };

    const guardarEstudiante = (valorBoton) => {
        let estudiante = {
            id: id,
            nombre: nombre,
            semestre: semestre,
            facultad: facultad
        };

        const idExiste = estudiantes.some(estu => estu.id === id); // some verifica si algo existe.


        if (valorBoton == "Registrar") {
            if (idExiste) {
                alert(`El ID ${id} ya existe`);
            } else {
                agregar(estudiante);
                limpiar();
            }
        }
        else {
            editar(estudiante);
            limpiar();
        }

    };

    return (
        <>
            <form>
                <div className="form-group ">
                    <label htmlFor="id">ID Estudiante</label>
                    <input type="number" className="form-control" id="id" placeholder="Ingrese id" value={id} onChange={(event) => setId(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control" id="nombre" placeholder="nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="semestre">Semestre</label>
                    <select class="form-select" aria-label="Default select example" value={semestre} onChange={(event) => setSemestre(event.target.value)}>

                        <option selected>Seleccione Semestre</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="5">4</option>
                        <option value="6">5</option>
                        <option value="7">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>

                    </select>
                </div>
                <div>
                    <label htmlFor="facultad">Facultad</label>

                    <select class="form-select" aria-label="Default select example" value={facultad} onChange={(event) => setFacultad(event.target.value)}>
                        <option selected>Seleccione Facultad</option>
                        <option value="ingenieria">Ingeniería</option>
                        <option value="medicina">Medicina</option>
                        <option value="comunicacion">Comunicación</option>
                        <option value="educacion">Eduación</option>
                        <option value="derecho">Derecho</option>
                    </select>
                </div>

            </form>
            <br></br>
            <button type="submit" className="btn btn-danger" onClick={() => { guardarEstudiante(boton); botonMostrar(1); desabiliBoton(1) }} >{boton}</button>
        </>
    )
}