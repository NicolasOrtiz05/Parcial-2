import { useState, useEffect } from "react"
import { FormularioEstudiante } from "./componentes/FormularioEstudiante";
import { TablaEstudiante } from "./componentes/TablaEstudiante";
import { getEstudiantes } from "./peticiones/getEstudiantes";
import { postEstudiantes } from "./peticiones/postEstudiante";
import { getEliminarEstudiante } from "./peticiones/getEliminarEsutdiante";
import { actualizarEstudiante } from "./peticiones/putActualizarEstudiante";

export const EstudiantesApp = () => {

    const [datos, setDatos] = useState(null);

    const [estudiantes, setEstudiantes] = useState([]);

    const agregarEstudiante = (estudiante) => {

        setEstudiantes([...estudiantes, estudiante])
        postEstudiantes(estudiante);
    };

    const eliminarEstudiante = (id, index) => {
        setEstudiantes(estudiantes.filter((_, i) => i !== index));
        getEliminarEstudiante(id);
    };

    const extraeDatos = (index) => {
        const estudiante = estudiantes.find((_, i) => i === index);
        setDatos(estudiante);
    };

    const cargueEstudiantes = async () => {
        const datos = await getEstudiantes()
        setEstudiantes(datos);
    }

    useEffect(() => {
        cargueEstudiantes();
    }, [])
    return (
        <>
            <body>
                <h1>Lista de Estudiantes</h1>
                <FormularioEstudiante agregar={(estu) => { agregarEstudiante(estu) }} datos={datos} editar={(id, estudianteActualizado) => { actualizarEstudiante(id, estudianteActualizado) }} />
                <TablaEstudiante eliminar={(id, index) => eliminarEstudiante(id, index)} listaEstudiantes={estudiantes} extrae={extraeDatos} />
            </body>
        </>
    )
}
