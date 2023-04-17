import { useEffect, useState } from "react"

export const FormularioEstudiante = ({ agregar, datos, editar, estudiantes }) => {
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [semestre, setSemestre] = useState("");
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
            botonMostrar(0);

        }
    }, [datos]);

    const limpiar = () => {
        setId("");
        setNombre("");
        setSemestre("");
    };

    const guardarEstudiante = (valorBoton) => {
        let estudiante = {
            id: id,
            nombre: nombre,
            semestre: semestre
        };

        const idExiste = estudiantes.some(estu => estu.id === id); // some verifica si algo existe.

        if (id === "" || nombre === "" || semestre === "") {
            alert(`Complete todos los espacios primero`);
        } else {
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
        }
    };

    return (
        <>
            <form>
                <div className="form-group ">
                    <label htmlFor="id">ID Estudiante</label>
                    <input type="id" className="form-control" id="id" placeholder="Ingrese id" value={id} onChange={(event) => setId(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control" id="nombre" placeholder="nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="semestre">Semestre</label>
                    <input type="text" className="form-control" id="semestre" placeholder="semestre" value={semestre} onChange={(event) => setSemestre(event.target.value)} />
                </div>
            </form>
            <br></br>
            <button type="submit" className="btn btn-danger" onClick={() => { guardarEstudiante(boton); botonMostrar(1); desabiliBoton(1) }} >{boton}</button>
        </>
    )
}