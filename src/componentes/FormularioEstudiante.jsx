import { useEffect, useState } from "react"
import { postEstudiantes } from "../peticiones/postEstudiante";

export const FormularioEstudiante = ({ agregar, datos, editar, estudiantes }) => {
    const [nombre, setNombre] = useState("");
    const [semestre, setSemestre] = useState("");
    const [facultad, setFacultad] = useState("");
    const [programa, setPrograma] = useState("");
    const [boton, setBoton] = useState("Registrar");

    const botonMostrar = (index) => {
        if (index == 0) {
            setBoton("Actualizar")
        } else {
            setBoton("Registrar")
        }
    };

    useEffect(() => {
        if (datos) {
            setNombre(datos.nombre);
            setSemestre(datos.semestre);
            setFacultad(datos.facultad);
            setPrograma(datos.programa)
            botonMostrar(0);
        }
    }, [datos]);

    const limpiar = () => {
        setNombre("");
        setSemestre("");
        setFacultad("");
        setPrograma("");
    };

    const guardarEstudiante = (valorBoton) => {
        let estudiante = {
            nombre: nombre,
            semestre: semestre,
            facultad: facultad,
            programa: programa
        };

        if (nombre === "" || semestre === "" || programa === "") {
            alert(`Complete todos los espacios primero`);
        } else {
            if (nombre.length < 3) {
                alert(`El nombre debe ser mayor a 3 caracteres`);
            } else {
                if (valorBoton == "Registrar") {
                    agregar(estudiante);
                    postEstudiantes(estudiante);
                    limpiar();
                    window.location.reload();
                }
                else {
                    editar(estudiante);
                    limpiar();
                    window.location.reload();
                }

            }

        }

    };

    return (
        <>
            <form>
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

                <div className="form-group">
                    <label htmlFor="programa">Programa</label>
                    <input type="text" className="form-control" id="programa" placeholder="programa" value={programa} onChange={(event) => setPrograma(event.target.value)} />
                </div>

            </form>
            <br></br>
            <button type="submit" className="btn btn-danger" onClick={() => { guardarEstudiante(boton); botonMostrar(1) }} >{boton}</button>
        </>
    )
}