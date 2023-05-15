import { useState, useEffect } from "react"
import { FormularioEstudiante } from "./componentes/FormularioEstudiante";
import { TablaEstudiante } from "./componentes/TablaEstudiante";
import { getEstudiantes } from "./peticiones/getEstudiantes";
import { postEstudiantes } from "./peticiones/postEstudiante";

export const EstudiantesApp = () => {

    const [datos, setDatos] = useState(null);

    const [estudiantes, setEstudiantes] = useState([]);

    const agregarEstudiante = (estudiante) => {
        postEstudiantes(estudiante);
        setEstudiantes([...estudiantes, estudiante])

    };

    const eliminarEstudiante = (index) => {
        setEstudiantes(estudiantes.filter((_, i) => i !== index));
    };

    const extraeDatos = (index) => {
        const estudiante = estudiantes.find((_, i) => i === index);
        setDatos(estudiante);
    };
    const editarEstudiante = (estudianteEditado) => {
        setEstudiantes(estudiantes.map((estudiante) => {
            if (estudianteEditado.id === estudiante.id) {
                return estudianteEditado;
            } else {
                return estudiante
            }
        }));

    }
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
                <FormularioEstudiante agregar={(estu) => { agregarEstudiante(estu) }} datos={datos} editar={(index, estudianteEditado) => { editarEstudiante(index, estudianteEditado) }} estudiantes={estudiantes} />
                <TablaEstudiante eliminar={(index) => eliminarEstudiante(index)} listaEstudiantes={estudiantes} extrae={extraeDatos} />
            </body>
        </>
    )
}
